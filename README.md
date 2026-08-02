# rad

RAD (Rapid Application Development) is a lightweight Express API server with a health check endpoint, built and maintained by Company #89037.

## Getting Started

### Prerequisites

- Node.js >= 20

### Installation

```bash
npm install
```

### Running the server

```bash
npm start          # production
npm run dev        # development (auto-restart on file changes)
```

The server starts on port 3000 by default. Override with `PORT=8080 npm start`.

### Running tests

```bash
npm test           # run tests with coverage
npm run test:watch # watch mode
```

## API Endpoints

| Method | Path      | Description                         |
|--------|-----------|-------------------------------------|
| GET    | `/health` | Returns service health status JSON  |

### Health Response

```json
{
  "status": "ok",
  "service": "rad",
  "timestamp": "2026-08-02T06:11:00.000Z",
  "uptime": 12.345
}
```

## Project Structure

```
rad/
├── src/
│   ├── server.js          # Express app entry point
│   └── routes/
│       └── health.js      # Health check route
├── tests/
│   └── health.test.js     # Health endpoint tests
├── .github/
│   ├── CODEOWNERS         # Code ownership rules
│   └── workflows/
│       └── ci.yml         # CI pipeline (Node 20 + 22)
├── package.json
├── LICENSE
└── .gitignore
```

## CI

GitHub Actions runs `npm ci && npm test` on Node 20 and 22 for every push and pull request to `main`. Coverage artifacts are uploaded automatically.

> **Note:** The CI workflow file (`.github/workflows/ci.yml`) needs to be added via a git push or the GitHub UI, as the Contents API requires the `workflow` scope to write to `.github/workflows/`.

## License

MIT