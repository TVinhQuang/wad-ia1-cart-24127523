# AI-LOG - IA#1 cartTotal

Student: 24127523 - Trần Vinh Quang.

This log distinguishes ChatGPT's learning, planning and review guidance,
Codex's repository edits and automated checks, and the student's personal work.
It is a summary, not a transcript. The ChatGPT assistance and personal review
in the final entries are recorded from the student's confirmation on 2026-10-08.
Earlier entries describe the status at each stage; their pending-review notes
are historical and are superseded by the completed review recorded below.

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
Rejected: None recorded. No package-based solution was produced and then discarded; excluding dependencies was a constraint of the brief, not a student rejection of generated code.
By hand: The student provided MSSV 24127523 and the name Trần Vinh Quang. No student-written code has been observed in this session.

The initial npm test run had 1 failing test because cartTotal threw
Error('not implemented'). Git publication and remote CI are not yet verified.

## 2026-10-08 - Specification tests and dependency-free harness

Tool: Codex, including separate assistant reviewers for tests and harness.
Asked for: Build tests from the assignment contract and prepare automated quality checks.
Kept: Pending student review. The assistant added 19 tests, a small format gate, EditorConfig/Git line-ending rules, and a GitHub Actions workflow for Node 22 and 24.
Changed: Shipping boundary tests use VAT 0 to isolate the shipping rule. A separate test checks the threshold before VAT. The brief explicitly describes the limited format checks instead of claiming full JavaScript linting.
Rejected: None recorded. Excluding unspecified validation from the planned test scope was an assistant design decision, not a discarded output or a student rejection.
By hand: No student-written test or harness code has been observed; these files were written by the assistant.

The expanded tests were run against the still-unimplemented function: 0 passed,
19 failed. See evidence/spec-tests-red.txt. The first local Git checkpoint,
d63775f, recorded these actual files; no earlier history was reconstructed.

## 2026-10-08 - Implementation and local validation

Tool: Codex.
Asked for: Implement the working brief and verify the result against the assignment.
Kept: Pending student review. The assistant wrote a 22-line cartTotal implementation and verified all 19 tests plus the format gate.
Changed: The assistant replaced src/cart.js's Error('not implemented') stub with per-item validation, subtotal accumulation, VAT/shipping calculation and a single final Math.round. Captured logs were normalized for UTF-8/LF and trailing whitespace. See evidence/implementation.diff for the actual code change.
Rejected: None recorded. No generated implementation was discarded by the student. Math.round, untaxed shipping and final-only rounding were design choices that followed the contract.
By hand: No student-written implementation has been observed. The student has supplied identity information but has not yet confirmed code review or oral understanding.

Evidence: src/cart.js, test/cart.test.js, evidence/local-check.txt (19 passed),
and evidence/format-gate.txt (a deliberately inserted trailing space failed the
gate; the original source was restored byte-for-byte and then passed).

## 2026-10-08 - Explanation and draft self-assessment

Tool: Codex.
Asked for: Complete the learning notes and submission documents using actual evidence.
Kept: Pending student review. The assistant drafted docs/EXPLANATION.md, appended usage instructions to README.md, and prepared SELF_ASSESSMENT_REPORT.md with a proposed total of 92/100.
Changed: The harness claim is limited to 16/20 because no real CI run is verified. The report explicitly identifies the unverified repository/CI and student-understanding steps.
Rejected: None recorded. The assistant prepared a provisional assessment and left remote CI pending; no student rejection of a report was recorded at this stage.
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
Rejected: None recorded. Repository creation could not proceed through the unavailable browser; that is an incomplete step, not a discarded AI output.
By hand: The student confirmed repository status. No student-created repository or completed code review has yet been observed.

The ZIP is a local draft, not a claim that the remote CI requirement or the
student's final self-assessment has been completed.

## 2026-10-08 - Student-requested rubric and evidence review

Tool: Codex, with an independent assistant review against the supplied rubric.
Asked for: The student read the draft self-assessment, questioned its proposed total of 92, and asked whether the work could be improved for a higher score.
Kept: The existing implementation, 19 tests and harness remain the current candidate. They already have the recorded local checks; no extra feature or test was needed to address this review.
Changed: The assistant added criterion-to-section mapping to brief.md, exported actual Git diffs into evidence/, corrected earlier Rejected lines that described unchosen alternatives, and recalibrated the proposed score to 96/100. Brief and log are evaluated against their explicit rubric criteria, rather than an invented deduction for pending student review.
Rejected: No generated code has been rejected by the student. The student's question prompted reassessment of the previous score; it is not recorded as an approval of all code or of the new total.
By hand: The student inspected the self-assessment and requested this review. No student-written code or completed oral explanation has been observed.

Evidence: evidence/planning-and-tests.diff exports the actual original brief,
rules, harness and tests from d63775f; evidence/implementation.diff exports the
actual src/cart.js change from d63775f to bce623c. These files let a reviewer
inspect the changes in a ZIP without needing its .git directory.

The earlier 92-point entries above describe the earlier draft accurately. The
proposed total at that stage was 96 (30 + 20 + 16 + 15 + 15); student review and
remote CI were pending. Proposed marks are not a guarantee of the teacher's marks.

## 2026-10-08 - Repository publication and verified remote CI

Tool: Codex, Git CLI, and GitHub REST API.
Asked for: Continue publication and CI after the student supplied https://github.com/TVinhQuang/wad-ia1-cart-24127523.git and said the repository had been created.
Kept: The existing implementation, 19 tests and harness were pushed unchanged. Both Node 22 and Node 24 jobs completed successfully, including their Check formatting and tests step.
Changed: The assistant added origin, pushed main, saved API evidence in evidence/ci-run.json, and updated README.md, evidence/ci-status.md and the report with actual links. Harness increased from the provisional 16/20 to proposed 20/20, making the proposed total 100/100.
Rejected: None. No failed CI output or generated code was discarded in this step.
By hand: The student supplied the repository URL and reported creating it. The assistant performed the connection, push and CI verification. No student code review or oral explanation is claimed.

Verified push run: https://github.com/TVinhQuang/wad-ia1-cart-24127523/actions/runs/37771408022
Verified commit: 4fef671723c261c452f5358a81c4d4502f746707.
Both job names, SHAs, conclusions and the check step were verified against the
API, not inferred from the existence of the workflow file or local success.

The previous 92/96-point entries remain a record of earlier incomplete stages.
The report and ZIP at that stage used proposed total 100; final student review
and confirmation of understanding were still pending then. Changes after the
recorded run are limited to publication/evidence documents and preserve the
tested source files.

## 2026-10-08 - ChatGPT learning, planning and review assistance

Tool: ChatGPT.
Asked for: Help understand the IA#1 requirements, Session 2 slides and rubric; explain cartTotal and its edge cases, project rules, brief, tests, harness and CI; review the completed project and suggest documentation and submission checks.
Kept: The student used the explanations, planning guidance, AGENTS.md suggestions, rubric-based review and final-submission advice to support learning and personal review.
Changed: ChatGPT provided suggestions rather than editing repository files. Actual file changes and validation were performed by Codex and are documented in its entries; no direct repository edit is attributed to ChatGPT.
Rejected: None recorded. No rejected suggestion or manual code modification is claimed.
By hand: The student confirms running the initial failing test, independently reviewing and understanding the generated implementation and tests, answering all 8 self-review questions, and reviewing the completed work to make acceptance decisions.

This entry records the ChatGPT role as confirmed by the student on 2026-10-08.
It supplements the existing truthful Codex records without reassigning their
work or commit references to ChatGPT. Guidance about AGENTS.md is not a claim
that ChatGPT directly wrote or modified that file.

## 2026-10-08 - Confirmed student review and documentation correction

Tool: Codex.
Asked for: Update documentation to reflect the completed personal review and distinguish ChatGPT, Codex and student contributions; preserve functionality, scores and evidence, and do not commit or push without approval.
Kept: The existing implementation, tests, harness, rubric scores and recorded evidence. Historical Codex sessions and commit references are preserved.
Changed: Codex updated SELF_ASSESSMENT_REPORT.md with the confirmed Student Review, added the ChatGPT and personal-contribution records here, and removed outdated review-pending wording in README.md. AGENTS.md and the implementation, tests, package configuration, validation scripts and CI workflows were not changed.
Rejected: None recorded. No student rejection or manual code change is invented.
By hand: The student independently read the source, studied cartTotal's calculation logic, validation and error handling, reviewed test purposes, answered all 8 questions in docs/EXPLANATION.md, and confirmed the ability to explain the code and design decisions. The student also confirmed personally running the initial failing test and reviewing the results for acceptance.

The student's initial test run is recorded from their confirmation. The existing
evidence/initial-test.txt remains the transcript of Codex's separately recorded
run; it is not presented as a capture of the student's own terminal session.
No new CI run or independently administered oral review is claimed for this
documentation update. Commit and push are awaiting the student's approval.

Validation: Codex ran npm.cmd run check after reviewing the documentation diff.
Format checks passed for 7 files; all 19 tests passed, with exit code 0. The
score rows and evidence references are unchanged. Only AI-LOG.md, README.md
and SELF_ASSESSMENT_REPORT.md changed; no commit or push was performed.
