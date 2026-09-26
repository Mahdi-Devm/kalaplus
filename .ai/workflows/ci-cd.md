# KalaPlus CI/CD Workflow

## Objective

Build and maintain a production-grade CI/CD pipeline for KalaPlus.

## Required Skills

Before working on CI/CD, use:

- ci-cd-and-automation
- security-and-hardening

## Repository Rules

- Primary branch: `master`
- This is a monorepo.
- Never assume the primary branch is `main`.
- Inspect the repository before changing CI/CD.
- Prefer existing scripts over creating duplicate scripts.
- Never commit secrets or credentials.

## Workflow

1. Inspect the existing CI/CD configuration.
2. Inspect package manager and workspace configuration.
3. Inspect frontend and backend build scripts.
4. Inspect lint, typecheck and test scripts.
5. Inspect Docker and deployment configuration.
6. Design the CI/CD pipeline based on the actual repository.
7. Implement the pipeline.
8. Run local validation.
9. Report every changed file.
10. Report failures and unresolved external configuration.

## Pull Requests

PRs targeting `master` should validate:

- dependencies
- lint
- typecheck
- tests
- frontend build
- backend build
- security/dependency checks when appropriate

## Master

Pushes to `master` should perform production validation.

Deployment must only be configured when an actual deployment provider is detected in the repository.

## Quality Requirements

The pipeline should:

- use caching
- avoid unnecessary work
- support parallel jobs where appropriate
- fail clearly
- produce useful logs
- avoid duplicated configuration
- keep secrets outside the repository
- remain maintainable

## Safety

Never:

- expose secrets
- invent deployment credentials
- modify unrelated application code
- rewrite working infrastructure without justification

After implementation, run all relevant checks and report the results.
