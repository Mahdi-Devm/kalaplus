# KalaPlus Engineering Conventions

## General

Follow existing project conventions before introducing new patterns.

Prefer consistency with nearby code.

## TypeScript

Use strict typing.

Avoid:

- unnecessary `any`
- unsafe type assertions
- duplicated types

## Components

Reuse existing components when possible.

Do not create duplicate UI components.

## API

Follow existing API patterns.

Do not introduce a second pattern for the same responsibility.

## Errors

Handle errors explicitly.

Do not silently swallow errors.

## Security

Never commit:

- API keys
- passwords
- tokens
- private credentials
- production secrets

## Dependencies

Before adding a dependency:

1. Check whether the repository already has an equivalent.
2. Check whether the dependency is actually necessary.
3. Prefer existing project infrastructure.

## Changes

Keep changes focused.

Do not perform unrelated refactoring during feature work.
