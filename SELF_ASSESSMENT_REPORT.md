# Self-assessment - IA#1

Submitted by: 24127523 - Trần Vinh Quang

Status: Student personal review completed and confirmed on 2026-10-08.
Prepared with Codex, with ChatGPT assistance for learning, planning and review.
Repository publication and both recorded remote CI jobs have been verified.
The rubric-based scores below are unchanged and are not a teacher-awarded mark.

Repository: https://github.com/TVinhQuang/wad-ia1-cart-24127523

Total I claim: 100 / 100

| Criterion | Max | I claim | Evidence |
| --- | ---: | ---: | --- |
| Behaviour | 30 | 30 | src/cart.js implements all README rules; evidence/local-check.txt records 19 passing tests, including the worked example, empty cart, shipping threshold, RangeError and final rounding cases. |
| Tests | 20 | 20 | test/cart.test.js has 19 tests with explicit independent expectations. Examples: `gives free shipping exactly at the threshold`, `throws RangeError for a negative price later in the cart`, and `throws RangeError when qty is fractional`. evidence/spec-tests-red.txt and evidence/local-check.txt record red then green. |
| Harness | 20 | 20 | AGENTS.md specifies the stack, commands and never rules; package.json supplies both gates; evidence/format-gate.txt proves rejection of a real format error. [Push run 37771408022](https://github.com/TVinhQuang/wad-ia1-cart-24127523/actions/runs/37771408022) passed on Node 22 and 24 at commit 4fef671723c261c452f5358a81c4d4502f746707. evidence/ci-status.md and evidence/ci-run.json record the job/step results. |
| Brief | 15 | 15 | brief.md sections Scope, Contract, and Acceptance and verification cover allowed files, inputs/outputs, errors and no dependencies. Rubric traceability maps every top-band requirement to a section. evidence/planning-and-tests.diff preserves the original working brief from d63775f before implementation. |
| AI-LOG.md | 15 | 15 | AI-LOG.md identifies the tool, outputs, actual changes, lack of discarded student-reviewed code, and observed student actions. It labels the earlier discussion as retrospective. evidence/planning-and-tests.diff and evidence/implementation.diff allow direct comparison with actual changes, without inventing student authorship. |

The Brief and AI-LOG claims use the top rubric band because the listed
requirements have specific evidence. The rubric does not prescribe a deduction
for heavy assistant use or require a minimum quantity of student-written code.
The student's completed personal review is recorded below. The final mark
within each band belongs to the teacher.

## Student Review

On 2026-10-08, I confirmed that I have:

- Independently read and reviewed the project's source code.
- Studied and understood cartTotal's calculations, validation rules and error
  handling, and can explain the implementation and its design decisions.
- Reviewed the test cases and understood their purposes.
- Studied and answered all 8 self-review questions in docs/EXPLANATION.md.
- Reviewed the completed work and taken responsibility for acceptance decisions.

I also confirm that I ran the initial failing test. These personal activities
are recorded from my confirmation; the existing evidence/initial-test.txt is
the transcript of Codex's separately recorded run. Codex generated the code,
tests, harness and repository documentation. ChatGPT provided learning,
planning and review guidance. I do not claim manual authorship of that code.

## What I did not manage

The earlier repository and remote CI gaps have been resolved: main was pushed
to the repository above, and the recorded push run passed on Node 22 and 24.
The recorded run identifies its exact commit; later changes in this submission
only add the observed CI evidence and update the report/log, leaving checked
code, tests and harness unchanged.

No outstanding implementation, testing or harness gap has been identified
against the assignment requirements. The earlier requirements-discussion log
was recorded retrospectively, as explicitly disclosed in AI-LOG.md.

## What I would do differently

Start the repository and record the requirements-discussion AI-LOG entry from
the beginning. Keep the log during each step and arrange a real CI run earlier,
so there is time to fix issues on both supported Node versions.

## Before submitting

Use the latest reviewed documents in the submission ZIP. Keep the score
supported by its evidence: the unchanged total gives the ZIP name
24127523_100.zip. If the total changes, update the filename too. Place this
report at the ZIP root.
