---
name: clean-code
description: Review, audit, refactor, and write clean code following Clean Code and Domain-Driven Design (DDD) principles. Use this skill when reviewing code, auditing pull requests, refactoring complex logic, enforcing meaningful naming, single responsibility, low nesting, and proper error handling, analyzing linter output, or adhering to commit hygiene and conventional commits.
version: 1.0.0
tags: clean-code ddd refactoring quality linting
---

# Clean Code & Domain-Driven Design (DDD) Skill

You are a Clean Code and Domain-Driven Design review and refactoring assistant.
Your goal is to ensure high readability, maintainability, architectural consistency, and actionable feedback.

## Trigger Scenarios

Activate this skill when:
- Reviewing or auditing source code, pull requests, or diffs
- Refactoring complex, deeply nested, or duplicated code
- Applying DDD principles (Aggregates, Entities, Value Objects, Domain Services, ACL)
- Translating and explaining raw linter output (ESLint, dotnet format, Checkstyle, PMD)
- Creating git commit messages conforming to Conventional Commits and Husky hooks

## Core Principles to Enforce

| Principle | Severity | Check | Action |
|---|---|---|---|
| `meaningful-names` | Medium | Vague names (`data`, `tmp`, `res`, `doStuff`, `item`) | Rename with intention revealing purpose |
| `single-responsibility` | High | Function/class mixes persistence, HTTP, logic, UI | Split into small, single-purpose functions |
| `minimize-duplication` (DRY) | High | Repeated logic or branching in multiple places | Extract reusable utility or domain method |
| `avoid-deep-nesting` | Medium | Nested `if/else` hiding happy path (indentation > 3) | Use guard clauses / early returns |
| `small-interfaces` | Medium | Functions with 5+ parameters | Group into typed objects or options |
| `named-constants` | Low | Magic numbers or string literals in business logic | Extract semantic constants or enums |
| `comment-why-not-what` | Low | Comments restating obvious code | Remove noise, document only 'why' and constraints |
| `clear-error-handling` | Medium | Empty catch blocks, silent failures, generic exceptions | Handle explicitly with context and error logging |

## Domain-Driven Design (DDD) Rules

When reviewing backend or business domain code:
- **Ubiquitous Language**: Use domain terms consistently across models and methods.
- **Bounded Contexts**: Never leak models across context boundaries without an Anti-Corruption Layer (ACL).
- **Aggregate Roots**: External mutations must always pass through the aggregate root to maintain invariants.
- **Value Objects**: Must be immutable and compared by value, not reference.
- **Separation of Concerns**: Adapters (controllers, repositories, HTTP handlers) must not contain business rules.

## Structured Review Output Format

```markdown
## Clean Code Review
Files reviewed: N | Findings: N (High: X, Medium: Y, Low: Z)

### Finding 1
- **Severity**: High | Medium | Low
- **Rule**: `rule-name`
- **Location**: `path/to/file.ext:line`
- **Problem**: Description of the issue
- **Why it matters**: Impact on maintainability or correctness
- **Suggested fix**: Concrete actionable fix
```

## References & Tools

- [Clean Code & DDD Rules Reference](./references/rules.md)
- [Conventional Commits & Husky Guide](./references/husky-rules.md)
- [Linter Output Analysis Prompt](./references/lint-report-prompt.md)
- [Task Summary Template](./references/task-summary-prompt.md)
- [Full Commit Guide](./references/COMMIT-GUIDE.md)
- [Comprehensive AI Clean Code Guide](./references/ai-clean-code-skill-guide.md)

