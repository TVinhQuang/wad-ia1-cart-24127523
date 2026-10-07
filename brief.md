# Brief - IA#1 cartTotal

## Context and provenance

Student: 24127523 - Tran Vinh Quang (Trần Vinh Quang).

On 2026-10-08 the student approved the proposed workflow and asked the assistant
to begin. This detailed brief was drafted by the assistant from that request,
README.md, the IA#1 rubric, and the session 2 slides before implementation.
It is the working specification for the implementation that follows; it is not
a verbatim earlier student prompt.

## Task

Implement cartTotal(items, options), with specification-based tests and a small,
dependency-free quality gate, then document the actual work and its evidence.

## Scope

- Implement src/cart.js and extend test/cart.test.js.
- Configure package.json, AGENTS.md, .editorconfig, .gitattributes, .gitignore,
  scripts/check-format.js, and .github/workflows/ci.yml for the harness.
- Maintain brief.md, AI-LOG.md, SELF_ASSESSMENT_REPORT.md, README.md,
  docs/EXPLANATION.md, and evidence/ for instructions and honest evidence.
- Prepare a local submission ZIP under output/ from the final tracked files;
  identify it as a draft while remote CI or student review is pending.
- Preserve the original assignment specification in README.md; append project
  instructions without changing the specification.
- Do not edit the supplied teaching documents, change the public function
  signature, introduce a UI/server/database, or add any dependencies.

## Contract

- Input items is an array of objects with name, price, and qty.
- Input options contains vatRate, freeShipFrom, and shipFee.
- subtotal is the sum of price * qty for every item.
- VAT is subtotal * vatRate; shipping is not taxed.
- Shipping is 0 if subtotal >= freeShipFrom, otherwise options.shipFee.
- Return subtotal + VAT + shipping as a number, rounded to whole dong once,
  after all components have been added.
- An empty items array returns 0 without charging VAT or shipping.
- A negative price throws RangeError.
- A qty that is not a positive integer throws RangeError, including zero,
  negative, fractional, or non-number quantities.
- Zero price is valid. Do not invent validation rules or option defaults beyond
  the supplied contract.

## Acceptance and verification

- Preserve the worked example: 2 * 180000 + 45000, with VAT 0.08,
  freeShipFrom 500000, shipFee 30000, returns the number 467400.
- Test empty carts, shipping below/at/above the threshold, and a subtotal whose
  VAT-inclusive amount exceeds the threshold but still owes shipping.
- Test negative prices and invalid quantities independently.
- Test rounding down/up and the numeric return type using explicit expected
  values. Do not copy the implementation formula into test assertions.
- Use only Node built-ins; no production or development dependencies.
- npm test and npm run format:check must pass locally.
- The format gate checks source indentation and text whitespace; it is not a
  general-purpose JavaScript linter.
- GitHub Actions runs both gates on push and pull_request, using Node 22 and 24.
  A workflow file alone is not proof of a successful remote run.

## Working process

Observe and record the failing starter test; write rules and this brief; add
tests and observe them fail; implement; review changes; run the gates; update
the log as work happens. Explain the code for student review before submission.

Only claim evidence that actually exists. Keep CI, repository publication, and
student oral understanding pending until each has been verified. The final ZIP
name must use the total actually claimed in the self-assessment.
