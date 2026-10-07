# Self-assessment - IA#1

Submitted by: 24127523 - Trần Vinh Quang

Status: DRAFT prepared with Codex on 2026-10-08. The scores below are an
assistant proposal for the current local result and need student review before
submission. They are not a teacher-awarded mark. Repository publication and
remote CI remain pending.

Total I claim: 92 / 100 (proposed; pending student review)

| Criterion | Max | I claim | Evidence |
| --- | ---: | ---: | --- |
| Behaviour | 30 | 30 | src/cart.js implements all README rules; evidence/local-check.txt records 19 passing tests, including the worked example, empty cart, shipping threshold, RangeError and final rounding cases. |
| Tests | 20 | 20 | test/cart.test.js has 19 tests with explicit independent expectations. Examples: `gives free shipping exactly at the threshold`, `throws RangeError for a negative price later in the cart`, and `throws RangeError when qty is fractional`. evidence/spec-tests-red.txt and evidence/local-check.txt record red then green. |
| Harness | 20 | 16 | AGENTS.md provides stack, commands and never rules; package.json has test, format:check and check; evidence/format-gate.txt proves the gate rejects a formatting error. .github/workflows/ci.yml exists, but evidence/ci-status.md records that actual remote CI has not run. This claim stays in the rubric's 11-16 band. |
| Brief | 15 | 13 | brief.md names allowed files, contract, error cases, no dependencies and acceptance checks. It was drafted before implementation from the student's approved workflow; detailed student review remains pending. |
| AI-LOG.md | 15 | 13 | AI-LOG.md records the tool, produced files, assistant decisions and observed student actions. It explicitly marks the earlier discussion as retrospective and does not invent student-written code or a student rejection. Student review remains pending. |

## What I did not manage

The student confirmed that a submission repository has not been created yet.
The local workspace therefore has no remote. There is no verified GitHub Actions run yet. The
Node 22 job is configured, but only Node 24 has actually been tested locally.
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
exists. With the current proposed total, the ZIP name is 24127523_92.zip; if the
total changes, the ZIP name must change too. Place this report at the ZIP root.
