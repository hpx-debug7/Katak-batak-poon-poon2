# Contributing to PixelDrop

Thanks for taking the time! Here's how to not make a mess.

---

## Ground Rules

- Be cool. This is a chill project.
- Open an issue before starting big changes — saves everyone time.
- Write tests for new behavior. Even bad tests are better than no tests.
- Don't commit your `node_modules`. (There aren't any, but still. Don't.)

---

## Getting Started

```bash
git clone https://github.com/example/pixeldrop.git
cd pixeldrop
go mod tidy
go build ./...
go test ./...
```

---

## Making Changes

1. Fork the repo
2. Branch off `main` — name it something sensible like `fix/crash-on-empty-dir` or `feat/webp-support`
3. Make your changes
4. Run `go test ./...` — if it's red, fix it
5. Open a PR with a description of what you did and why

---

## Commit Style

Keep commits small and descriptive. Loosely follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add watch mode
fix: prevent panic on empty input directory
chore: update dependencies
docs: clarify quality flag behavior
```

---

## Reporting Bugs

Open a GitHub Issue and include:
- Your OS and Go version
- The command you ran
- What happened vs. what you expected
- A sample image if relevant (keep it small)

---

## What NOT to Submit

- Huge refactors with no context
- PRs that break existing tests
- "Just cleaning up" PRs that change 400 files
- Anything that requires a PhD to review

---

That's it. Happy compressing. 🖼️
