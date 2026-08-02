# rad

> Company #89037 — primary application repository

## Overview

`rad` is the main codebase for Company #89037, an AI-native B2C company. This repo will host the full-stack application: frontend, backend services, shared libraries, and infrastructure-as-code.

## Repository Status

- **Created**: 2026-07-20
- **Default branch**: `main`
- **Visibility**: public
- **License**: TBD — add a LICENSE file before any external contribution

## Getting Started

```bash
git clone https://github.com/arynjennen1989-stack/rad.git
cd rad
```

> The project scaffold, build tooling, and dependency manifest will be added in subsequent commits. For now the repo is bootstrapped with this README.

## Repository Structure

```
rad/
├── README.md          # You are here
├── src/               # Application source (to be added)
├── tests/             # Test suite (to be added)
├── .github/           # CI/CD workflows (to be added)
└── docs/              # Architecture & API docs (to be added)
```

## Development Workflow

1. **Branch**: Create a feature branch from `main` (`feat/...`, `fix/...`, `chore/...`)
2. **Commit**: Write clear, conventional commit messages (`type: description`)
3. **PR**: Open a pull request against `main` with a description of changes
4. **Review**: At least one approval before merge
5. **Merge**: Squash-merge preferred to keep history clean

## Conventions

- **Commit style**: [Conventional Commits](https://www.conventionalcommits.org/) — `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `test:`
- **Branch naming**: `type/short-description` (e.g. `feat/auth-flow`, `fix/login-redirect`)
- **Testing**: All new code must include tests. CI will block merge on failing tests.
- **Code style**: Enforced via linter config (to be added)

## CI/CD

GitHub Actions workflows will be added under `.github/workflows/` for:
- Linting
- Testing
- Build verification
- Deployment (staging → production)

## License

To be determined. Add a `LICENSE` file once decided.

---

*This README was generated as part of the repo bootstrap. Update it as the project evolves.*