# KalaPlus Code Review Workflow

## Objective

Review code for correctness, maintainability, security and performance.

## Required Skills

Use:

- code-review-and-quality
- security-and-hardening
- performance-optimization

## Review Order

1. Correctness
2. Security
3. Data integrity
4. Architecture
5. Error handling
6. Performance
7. Maintainability
8. Testing
9. Type safety

## Check For

- bugs
- race conditions
- incorrect async behavior
- missing validation
- authorization problems
- sensitive data exposure
- N+1 queries
- unnecessary network requests
- unnecessary re-renders
- duplicated logic
- weak typing
- missing error handling
- missing tests

## Rules

Prioritize real problems over stylistic preferences.

Do not request changes merely because another style is possible.

Do not perform unrelated refactors.

Every finding should explain:

- what is wrong
- why it matters
- where it occurs
- how it can be fixed

Separate critical issues from optional improvements.
