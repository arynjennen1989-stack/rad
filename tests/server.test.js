const { spawn } = require('child_process');
const path = require('path');
const http = require('http');

describe('Server startup', () => {
  it('should start listening on the configured port', (done) => {
    const child = spawn('node', [path.join(__dirname, '..', 'src', 'server.js')], {
      env: { ...process.env, PORT: '3999' },
      stdio: ['pipe', 'pipe', 'pipe'],
    });

    let started = false;

    child.stdout.on('data', (data) => {
      if (data.toString().includes('running on port') && !started) {
        started = true;
        const req = http.get('http://localhost:3999/health', (res) => {
          let body = '';
          res.on('data', (chunk) => { body += chunk; });
          res.on('end', () => {
            const json = JSON.parse(body);
            expect(json.status).toBe('ok');
            child.kill();
            done();
          });
        });
        req.on('error', (err) => {
          child.kill();
          done(err);
        });
      }
    });

    child.stderr.on('data', (data) => {
      done(new Error(data.toString()));
      child.kill();
    });

    child.on('error', (err) => {
      done(err);
    });

    setTimeout(() => {
      if (!started) {
        child.kill();
        done(new Error('Server did not start within timeout'));
      }
    }, 3000);
  });
});