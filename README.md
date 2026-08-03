# rad

A Node.js/Express API project. Currently in bootstrap phase.

## License

MIT. See [LICENSE](LICENSE) for details.

## Current State

The following have landed on `main`:

- **MIT LICENSE** file
- **ESLint 9 flat config** (`eslint.config.js` with `eslint:recommended` for CommonJS/Node.js/Jest)
- **Express server** with `GET /health` endpoint
- **9 tests** (health endpoint + server bootstrap) with coverage thresholds
- **package.json** with scripts: `start`, `dev`, `test`, `lint`

Merged PRs: [#7](https://github.com/arynjennen1989-stack/rad/pull/7) (LICENSE + ESLint), [#8](https://github.com/arynjennen1989-stack/rad/pull/8) (server, tests, coverage).

## Open Issues

- [#6](https://github.com/arynjennen1989-stack/rad/issues/6) — Add GitHub Actions CI workflow file (blocked: API token lacks `workflow` scope)

## Development

```bash
npm install
npm test       # Run Jest tests with coverage
npm run lint   # Run ESLint
npm start      # Start the Express server on port 3000
```

## Project Structure

```
rad/
├── src/
│   ├── server.js          # Express app entry point
│   └── routes/
│       └── health.js      # GET /health endpoint
├── tests/
│   ├── health.test.js     # Health endpoint tests (5)
│   └── server.test.js     # Server bootstrap tests (4)
├── eslint.config.js       # ESLint 9 flat config
├── package.json
├── LICENSE
└── README.md
```

## Conventions

- **Commits:** [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`, `chore:`, etc.)
- **Branches:** `feature/`, `fix/`, `chore/` prefixes
- **Testing:** All new features must include tests. Coverage thresholds: 80% statements, 70% branches, 40% functions, 80% lines.