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
- [AI usage log](AI-LOG.md) and [draft self-assessment](SELF_ASSESSMENT_REPORT.md).
- [Recorded checks](evidence/README.md) and [remote CI status](evidence/ci-status.md).

The local check passed on Node 24 with 19 tests. Remote CI is pending until a
submission repository is supplied and its workflow actually runs successfully.
The report and proposed mark need the student's review before submission.

For submission, include this project, its repository link, brief, AI log, and
self-assessment in `24127523_<total>.zip`. The report must be at the ZIP root.
Keep the total consistent with the report. Check the deadline on Classroom.

## Create the submission repository

Open https://github.com/new while signed in. Suggested name:
`wad-ia1-cart-24127523`. Select visibility according to the course's requirements.
Keep the new repository empty: do not generate a README, .gitignore or license,
because this local project already has its own files and Git history.

After creation, copy the repository URL. Connect it as `origin` and push `main`.
In the repository's Actions tab, verify that the `Quality checks` workflow is
green for both Node 22 and Node 24. Add the repository/run links to the evidence
and update the report before preparing the final submission ZIP.
