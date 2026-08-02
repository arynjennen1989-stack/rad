# rad

A Node.js/Express API project. Currently in bootstrap phase.

## License

MIT. See [LICENSE](LICENSE) for details.

## Current State

The repo is being bootstrapped. The following have landed on `main`:

- **MIT LICENSE** file
- **ESLint configuration** (`.eslintrc.json` with `eslint:recommended` for Node.js/Jest)

The Express server scaffold, tests, and project structure are pending in open PRs:

- [PR #1](https://github.com/arynjennen1989-stack/rad/pull/1) — Repo bootstrap (README, .gitignore, audit report)
- [PR #2](https://github.com/arynjennen1989-stack/rad/pull/2) — Express server, health endpoint, tests, and docs
- [PR #8](https://github.com/arynjennen1989-stack/rad/pull/8) — LICENSE, ESLint config, server tests, coverage thresholds

## Open Issues

- [#5](https://github.com/arynjennen1989-stack/rad/issues/5) — Add CI/CD workflow (lint + test on PR)
- [#6](https://github.com/arynjennen1989-stack/rad/issues/6) — Add GitHub Actions CI workflow file (blocked on API token `workflow` scope)

## Development

Once PR #2 is merged, the project will have:

```bash
npm install
npm test      # Run Jest tests with coverage
npm run lint  # Run ESLint
npm start     # Start the Express server on port 3000
```

## Conventions

- **Commits:** [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`, `chore:`, etc.)
- **Branches:** `feat/`, `fix/`, `chore/` prefixes
- **Testing:** All new features must include tests. Coverage thresholds: 80% statements, 70% branches, 40% functions, 80% lines.