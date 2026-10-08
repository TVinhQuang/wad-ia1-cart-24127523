# cart — session 2 starter

Run the test first and watch it fail:

```bash
npm test
```

## What to implement

`cartTotal(items, options)` in `src/cart.js`. Plain JavaScript, **no dependencies**.

- `items`: `[{ name, price, qty }]` · `options`: `{ vatRate, freeShipFrom, shipFee }`
- `subtotal` = sum of `price × qty`
- VAT = `vatRate` applied to the subtotal
- shipping = `0` when `subtotal >= freeShipFrom`, otherwise `shipFee`
- return `subtotal + VAT + shipping`, **a number**, rounded to the whole đồng
- an empty cart returns `0` — no VAT, no shipping
- a negative `price`, or a `qty` that is not a positive integer, throws `RangeError`

Worked example: 2 × 180000 + 1 × 45000 = 405000 subtotal, VAT 32400,
shipping 30000 (below the 500000 threshold) → **467400**.

## What you hand in

One zip named `<StudentID>_<total>.zip` — the total being the mark you give
yourself against the rubric — containing:

1. This repository, with `npm test` green
2. The brief you gave your assistant
3. `AI-LOG.md` — template on Classroom
4. `SELF_ASSESSMENT_REPORT.md` — template on Classroom, one row per rubric
   criterion with evidence

The rubric is attached to the assignment on Classroom. Read it before you start:
30 of the 100 marks are for behaviour, and they are checked by running your code.

---

## Student implementation

Trần Vinh Quang - 24127523.

Use Node.js 22 or newer and npm 10 or newer. No dependencies need installing.

```bash
npm test
npm run format:check
npm run check
```

On Windows PowerShell, use `npm.cmd` instead of `npm` if execution policy blocks
`npm.ps1`, for example `npm.cmd run check`.

- `npm test` runs 19 specification-based tests with Node's built-in runner.
- `format:check` checks tabs, trailing whitespace, final newlines, and JavaScript
  indentation in multiples of two spaces. It accepts CRLF and LF checkouts.
  This small project-specific gate is not a full JavaScript linter or formatter.
- `check` runs the format gate followed by the tests and fails if either fails.
- `.github/workflows/ci.yml` runs `npm run check` on push and pull requests,
  on Node 22 and 24. It needs no install step because the project has no packages.

## Evidence and learning notes

- [Project rules](AGENTS.md) and [working brief](brief.md).
- [Code and test explanation in Vietnamese](docs/EXPLANATION.md).
- [AI usage log](AI-LOG.md) and [self-assessment](SELF_ASSESSMENT_REPORT.md).
- [Recorded checks](evidence/README.md) and [remote CI status](evidence/ci-status.md).

The local check passed on Node 24 with 19 tests. GitHub Actions also passed on
Node 22 and Node 24; see the recorded run below and evidence/ci-run.json.
On 2026-10-08 the student confirmed personal code/test review, completion of all
8 self-review questions, and understanding of the implementation and its design
decisions. See Student Review in SELF_ASSESSMENT_REPORT.md and the separate
ChatGPT, Codex and student contributions in AI-LOG.md.

For submission, include this project, its repository link, brief, AI log, and
self-assessment in `24127523_<total>.zip`. The report must be at the ZIP root.
Keep the total consistent with the report. Check the deadline on Classroom.

## Submission repository and CI

- Repository: https://github.com/TVinhQuang/wad-ia1-cart-24127523
- Recorded successful push run: https://github.com/TVinhQuang/wad-ia1-cart-24127523/actions/runs/37771408022
- Verified commit: `4fef671723c261c452f5358a81c4d4502f746707`.
- Workflow history: https://github.com/TVinhQuang/wad-ia1-cart-24127523/actions/workflows/ci.yml

The recorded run verified both matrix jobs and their formatting/test step.
The unchanged claimed self-assessment is 100/100, so the matching ZIP is
`24127523_100.zip`. The teacher determines the final mark. Include the latest
reviewed documents when refreshing the submission ZIP. After any future push,
inspect its own CI result before submitting that version.
