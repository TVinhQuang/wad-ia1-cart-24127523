# Self-assessment - IA#1

Submitted by: 24127523 - Trần Vinh Quang

Status: DRAFT prepared with Codex on 2026-10-08. The scores below are an
assistant proposal for the current local result and need student review before
submission. They are not a teacher-awarded mark. Repository publication and
remote CI remain pending.

Total I claim: 96 / 100 (proposed; pending student review)

| Criterion | Max | I claim | Evidence |
| --- | ---: | ---: | --- |
| Behaviour | 30 | 30 | src/cart.js implements all README rules; evidence/local-check.txt records 19 passing tests, including the worked example, empty cart, shipping threshold, RangeError and final rounding cases. |
| Tests | 20 | 20 | test/cart.test.js has 19 tests with explicit independent expectations. Examples: `gives free shipping exactly at the threshold`, `throws RangeError for a negative price later in the cart`, and `throws RangeError when qty is fractional`. evidence/spec-tests-red.txt and evidence/local-check.txt record red then green. |
| Harness | 20 | 16 | AGENTS.md provides stack, commands and never rules; package.json has test, format:check and check; evidence/format-gate.txt proves the gate rejects a formatting error. .github/workflows/ci.yml exists, but evidence/ci-status.md records that actual remote CI has not run. This claim stays in the rubric's 11-16 band. |
| Brief | 15 | 15 | brief.md sections Scope, Contract, and Acceptance and verification cover allowed files, inputs/outputs, errors and no dependencies. Rubric traceability maps every top-band requirement to a section. evidence/planning-and-tests.diff preserves the original working brief from d63775f before implementation. |
| AI-LOG.md | 15 | 15 | AI-LOG.md identifies the tool, outputs, actual changes, lack of discarded student-reviewed code, and observed student actions. It labels the earlier discussion as retrospective. evidence/planning-and-tests.diff and evidence/implementation.diff allow direct comparison with actual changes, without inventing student authorship. |

The Brief and AI-LOG claims use the top rubric band because the listed
requirements have specific evidence. The rubric does not prescribe a deduction
for heavy assistant use or require a minimum quantity of student-written code.
Student review and ability to explain the work remain separate obligations,
not completed actions. The final mark within each band belongs to the teacher.

## What I did not manage

The student confirmed that a submission repository has not been created yet.
The local workspace therefore has no remote. There is no verified GitHub Actions
run yet. The Node 22 job is configured, but only Node 24 has been tested locally.
The repository link and CI run link still need to be added before submission.

The code and harness were written by the assistant. The student's ability to
explain every line has not yet been checked. docs/EXPLANATION.md contains study
notes and questions; reading/answering them must be recorded only after it occurs.

## What I would do differently

Start the repository and record the requirements-discussion AI-LOG entry from
the beginning. Keep the log during each step and arrange a real CI run earlier,
so there is time to fix issues on both supported Node versions.

## Before submitting

The student should review these claims and replace the draft status with an
honest final assessment. Update the marks only when the corresponding evidence
exists. With the current proposed total, the ZIP name is 24127523_96.zip; if the
total changes, the ZIP name must change too. Place this report at the ZIP root.
