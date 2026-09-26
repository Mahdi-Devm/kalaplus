# KalaPlus Testing Workflow

## Objective

Write reliable tests for KalaPlus using the project's existing testing stack.

## Required Skills

Use the testing-related skills available in the repository.

Also use:

- code-review-and-quality

## Before Writing Tests

Inspect:

- existing test configuration
- existing test files
- test utilities
- mocks
- fixtures
- setup files
- package scripts

Never assume the testing framework.

## Frontend Testing

For React/Next.js components:

- prefer React Testing Library
- test user-visible behavior
- use user interactions instead of implementation details
- avoid testing internal component state directly
- mock external dependencies only when necessary

## Backend Testing

For NestJS:

- test services and business logic independently
- test controllers/API behavior where appropriate
- use integration/e2e tests for important application flows

## Test Structure

Use clear:

- describe
- it/test
- arrange
- act
- assert

Tests should describe behavior, not implementation.

## Workflow

1. Inspect the target code.
2. Inspect related tests.
3. Identify expected behavior.
4. Write the smallest useful test.
5. Run the test.
6. Fix the test or implementation if necessary.
7. Run related tests.
8. Run the full relevant test suite.

## Rules

Never make a test pass by weakening the assertion.

Never delete a failing test without understanding the failure.

Do not add unnecessary mocks.

Do not introduce a new testing library without justification.
