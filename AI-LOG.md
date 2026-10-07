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
19 failed. See evidence/spec-tests-red.txt. The first local Git checkpoint,
d63775f, recorded these actual files; no earlier history was reconstructed.

## 2026-10-08 - Implementation and local validation

Tool: Codex.
Asked for: Implement the working brief and verify the result against the assignment.
Kept: Pending student review. The assistant wrote a 22-line cartTotal implementation and verified all 19 tests plus the format gate.
Changed: The assistant used a for-of loop to validate each item before adding its amount, returned early for an empty cart, and rounded only the final total. Captured logs were normalized for UTF-8/LF and trailing whitespace.
Rejected: The assistant did not use toFixed, did not tax shipping, and did not round VAT per item. These are assistant implementation decisions, not claims about student rejection.
By hand: No student-written implementation has been observed. The student has supplied identity information but has not yet confirmed code review or oral understanding.

Evidence: src/cart.js, test/cart.test.js, evidence/local-check.txt (19 passed),
and evidence/format-gate.txt (a deliberately inserted trailing space failed the
gate; the original source was restored byte-for-byte and then passed).

## 2026-10-08 - Explanation and draft self-assessment

Tool: Codex.
Asked for: Complete the learning notes and submission documents using actual evidence.
Kept: Pending student review. The assistant drafted docs/EXPLANATION.md, appended usage instructions to README.md, and prepared SELF_ASSESSMENT_REPORT.md with a proposed total of 92/100.
Changed: The harness claim is limited to 16/20 because no real CI run is verified. The report explicitly identifies the unverified repository/CI and student-understanding steps.
Rejected: No automatic 100/100 claim and no claim that local success proves remote CI. These decisions were made by the assistant.
By hand: No student-written report or completed oral explanation has been observed. The student must review the proposed assessment before submitting.

An assistant reviewer checked implementation, tests, harness and log honesty.
The reviewer initially questioned the empty-cart test's partial options, then
withdrew the concern when checked against the exact example on slide 11. The
student did not perform or claim that review.

## 2026-10-08 - Repository status and local submission draft

Tool: Codex and the computer-use browser tool.
Asked for: Continue toward a complete submission, including GitHub and CI.
Kept: Pending student review. The local Git history and instructions for creating an empty GitHub repository are available; a ZIP draft uses the current proposed score of 92.
Changed: The student confirmed that no repository exists yet. The browser tool returned no available browsers, so repository creation and remote CI remain pending.
Rejected: The assistant did not invent a repository URL or mark CI as successful.
By hand: The student confirmed repository status. No student-created repository or completed code review has yet been observed.

The ZIP is a local draft, not a claim that the remote CI requirement or the
student's final self-assessment has been completed.
