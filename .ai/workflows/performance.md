# KalaPlus Performance Workflow

## Objective

Identify and improve real performance bottlenecks.

## Required Skills

Use:

- performance-optimization
- code-review-and-quality

## Workflow

1. Identify the affected area.
2. Inspect current implementation.
3. Measure or gather evidence where possible.
4. Identify the bottleneck.
5. Determine whether it is frontend, backend, database, network or infrastructure related.
6. Implement the smallest effective improvement.
7. Verify behavior.
8. Measure again when possible.

## Frontend

Check:

- unnecessary renders
- large client components
- excessive JavaScript
- unnecessary requests
- caching
- image optimization
- loading states
- bundle size
- server/client boundaries

## Backend

Check:

- N+1 queries
- inefficient database queries
- unnecessary serialization
- caching
- Redis usage
- expensive synchronous operations
- queue usage

## Rules

Never optimize based only on assumptions.

Do not introduce caching without understanding invalidation.

Do not sacrifice correctness for micro-optimizations.
