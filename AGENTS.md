# Project rules - IA#1 cartTotal

- Stack: JavaScript ES modules, Node.js 22 or newer, npm 10 or newer.
- Contract: follow README.md; export cartTotal(items, options) from src/cart.js.
- Style: two-space indentation, named exports, single quotes, no semicolons.
- Commands: npm test; npm run format:check; npm run check (both gates).
- Windows PowerShell: use npm.cmd if the npm.ps1 execution policy blocks npm.
- Tests: use node:test and node:assert/strict in test/cart.test.js.
- Each test checks one behaviour from the specification with an independent expected value.
- Round only the final total. Free shipping uses the subtotal before VAT.
- Never add runtime or development dependencies, or silently change the contract.
- Never commit .env, secrets, node_modules, or claim an unverified CI run.
- Keep changes within the scope in brief.md; review changes before running them.
- Update AI-LOG.md during the work; distinguish assistant work from student work.
- Self-assessment must cite actual files, test names, or successful CI runs.
