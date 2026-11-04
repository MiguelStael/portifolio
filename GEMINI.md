# Agent Guidelines for miguelstael.dev Portfolio

This project enforces **Clean Code**, **Domain-Driven Design (DDD)**, and **Natural Writing (Avoid AI Writing)** standards.

---

## 1. Clean Code Standards

- **Single Responsibility (SRP)**: Keep components, hooks, utilities, and functions small, cohesive, and focused on a single concern.
- **Meaningful Names**: Use intention-revealing names for variables, interfaces, functions, and files. Avoid ambiguous abbreviations (`res`, `tmp`, `val`, `data`).
- **Low Indentation & Guard Clauses**: Avoid nested conditionals (>2 levels). Prefer early returns and guard clauses to keep the happy path prominent.
- **Strict Typing (TypeScript)**: Never use `any`. Leverage interfaces or types with descriptive property names.
- **Constants Over Magic Values**: Extract configuration strings, URLs, and numeric thresholds into semantic constants.
- **Component Modularity**: Separate UI representation, business state, and data sources into components, hooks, and data definitions.

---

## 2. Avoid AI Writing Standards

When creating, editing, or auditing content (prose, hero copy, about section, project descriptions, commit messages, documentation):
- **Natural Human Voice**: Write in an authentic, direct, professional, and clear tone.
- **No Machine Clichés**: Eliminate AI-isms such as "dive deep", "seamlessly", "testament to", "delve", "tapestry", "revolutionize", "pivotal", "in conclusion", "furthermore", "beacon".
- **Evidence-Based & Concrete**: Ground every claim in concrete facts, metrics, and achievements (e.g. "790 horas na Residência Serratec", "Média 95,5/100").
- **Clarity and Precision**: Prefer concise sentences over flowery adjectives and repetitive transitional phrases.

---

## 3. Conventional Commits & Version Control

- Format: `<type>(<scope>): <subject>` (all lowercase, no trailing period, max 72 characters)
- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`
- Do not bypass verification hooks.
