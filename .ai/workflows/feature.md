# KalaPlus Feature Development Workflow

## Objective

Implement new features without breaking the existing architecture.

## Required Skills

Load the skills relevant to the feature.

Possible skills:

- spec-driven-development
- api-and-interface-design
- code-review-and-quality
- performance-optimization
- security-and-hardening

## Workflow

1. Understand the requested feature.
2. Inspect existing related code.
3. Identify the correct frontend feature/module.
4. Identify the correct backend module.
5. Inspect existing API/data flow.
6. Check database requirements.
7. Check authentication/authorization requirements.
8. Check existing reusable components and utilities.
9. Create an implementation plan.
10. Implement the feature.
11. Add or update tests.
12. Run lint.
13. Run typecheck.
14. Run tests.
15. Run relevant builds.
16. Review the final changes.

## Architecture Rules

Prefer existing project patterns.

Do not introduce a new library when an existing dependency solves the problem.

Do not duplicate existing components, services, hooks or utilities.

Keep frontend and backend responsibilities separated.

Do not perform unrelated refactors.

## Completion Criteria

A feature is not complete until:

- implementation works
- types are valid
- tests pass
- lint passes
- relevant builds pass
- security implications are reviewed
