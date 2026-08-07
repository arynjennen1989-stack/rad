# rad

A Node.js/Express API project. Currently in bootstrap phase.

## License

MIT. See [LICENSE](LICENSE) for details.

## Current State

The following have landed on `main`:

- **MIT LICENSE** file
- **ESLint 9 flat config** (`eslint.config.js` with `eslint:recommended` for CommonJS/Node.js/Jest)
- **Express server** with `GET /health` endpoint
- **8 tests** (5 health endpoint + 3 server bootstrap) with coverage thresholds
- **package.json** with scripts: `start`, `dev`, `test`, `lint`
- **Complete devDependencies** (`@eslint/js` and `globals` added in PR #10)
- **CI workflow**: broken `webpack.yml` removed in PR #12. Replacement `ci.yml` still needs to be added (see issue #6)

Merged PRs: [#7](https://github.com/arynjennen1989-stack/rad/pull/7) (LICENSE + ESLint), [#8](https://github.com/arynjennen1989-stack/rad/pull/8) (server, tests, coverage), [#9](https://github.com/arynjennen1989-stack/rad/pull/9) (remove stale .eslintrc.json, README update), [#10](https://github.com/arynjennen1989-stack/rad/pull/10) (fix missing ESLint devDependencies), [#11](https://github.com/arynjennen1989-stack/rad/pull/11) (fix README test count + add CI workflow to project structure), [#12](https://github.com/arynjennen1989-stack/rad/pull/12) (remove broken webpack workflow).

## Open Issues

- [#6](https://github.com/arynjennen1989-stack/rad/issues/6) — Add GitHub Actions CI workflow file (webpack.yml removed, ci.yml replacement not yet added due to token workflow scope limitation)

## Development

```bash
npm install
npm test          # Run Jest tests with coverage
npm run lint      # Run ESLint
npm start          # Start the Express server on port 3000
```

## Project Structure

```
rad/
├── src/
│   ├── server.js              # Express app entry point
│   └── routes/
│       └── health.js          # GET /health endpoint
├── tests/
│   ├── health.test.js         # Health endpoint tests (5)
│   └── server.test.js         # Server bootstrap tests (3)
├── eslint.config.js           # ESLint 9 flat config
├── package.json
├── LICENSE
└── README.md
```

## Conventions

- **Commits:** [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`, `chore:`, etc.)
- **Branches:** `feature/`, `fix/`, `core/` prefixes
- **Testing:** All new features must include tests. Coverage thresholds: 80% statements, 70% branches, 40% functions, 80% lines.