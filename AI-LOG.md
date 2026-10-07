# AI-LOG - IA#1 cartTotal

Student: 24127523 - Trần Vinh Quang.

This log records assistant actions separately from student actions. It is a
summary, not a transcript. Unconfirmed student work is not claimed as completed.

## 2026-10-08 - Record of the earlier requirements discussion

Tool: Codex.
Asked for: Read the starter project and the supplied rubric, slides, and templates; explain the assignment and propose a workflow.
Kept: The proposed harness -> brief -> implementation/validation -> log workflow, which the student explicitly approved.
Changed: The assistant expanded its README-only summary after reading the rubric, adding the separate tests and harness criteria and the requirement for actual CI evidence.
Rejected: None explicitly recorded by the student.
By hand: The student supplied the teaching documents, asked about alignment with the course, and approved the workflow; no student-written code was observed.

This entry summarizes the earlier discussion retrospectively on 2026-10-08.
It is not claimed to have been recorded during that earlier discussion.

## 2026-10-08 - Harness preparation and working brief

Tool: Codex.
Asked for: Begin the approved assignment workflow.
Kept: Pending student review. The assistant drafted AGENTS.md and brief.md and recorded the starter failure in evidence/initial-test.txt.
Changed: The assistant used npm.cmd because PowerShell blocks npm.ps1, and selected a Node-only format check to preserve the no-dependencies constraint.
Rejected: The assistant chose not to add formatter/linter packages or unrelated validation rules. This is an assistant decision, not a claimed student rejection.
By hand: The student provided MSSV 24127523 and the name Trần Vinh Quang. No student-written code has been observed in this session.

The initial npm test run had 1 failing test because cartTotal threw
Error('not implemented'). Git publication and remote CI are not yet verified.

## 2026-10-08 - Specification tests and dependency-free harness

Tool: Codex, including separate assistant reviewers for tests and harness.
Asked for: Build tests from the assignment contract and prepare automated quality checks.
Kept: Pending student review. The assistant added 19 tests, a small format gate, EditorConfig/Git line-ending rules, and a GitHub Actions workflow for Node 22 and 24.
Changed: Shipping boundary tests use VAT 0 to isolate the shipping rule. A separate test checks the threshold before VAT. The brief explicitly describes the limited format checks instead of claiming full JavaScript linting.
Rejected: The assistant excluded tests for invented option defaults or unspecified validation. No student rejection is claimed.
By hand: No student-written test or harness code has been observed; these files were written by the assistant.

The expanded tests were run against the still-unimplemented function: 0 passed,
19 failed. See evidence/spec-tests-red.txt. The first local Git checkpoint will
record these actual files; no earlier commit history is being reconstructed.
