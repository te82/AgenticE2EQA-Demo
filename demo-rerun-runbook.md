# Demo Rerun Runbook

This runbook is for safely rerunning the QA workflow without overwriting existing generated artifacts or breaking the project state.

## Purpose

Use this document whenever you need to:
- rerun the end-to-end workflow for leadership demos
- regenerate reports and automation scripts
- preserve prior evidence before creating a fresh run
- follow enterprise-safe backup, validation, and Git hygiene practices

---

## One-Click Demo Rerun Checklist

Use this short sequence before every rerun:

1. Archive old evidence: move previous generated artifacts into backup-demo-artifacts.
2. Confirm repo health: git status, git remote -v, and repo owner/name.
3. Use the demo repo pattern: te82/AgenticE2EQA-Demo.
4. Keep only the required project files visible in the working tree.
5. Rerun the workflow only after backup and validation.
6. Push only after verifying the remote and checking for secrets.

Quick PowerShell command block:

```powershell
$RepoOwner = "te82"
$RepoName = "AgenticE2EQA-Demo"
$RepoUrl = "https://github.com/$RepoOwner/$RepoName.git"

Set-Location "C:\Users\rgajula3\Downloads\Agentic AI Automation\AgentE2EQAWorkflow-Playwright"
if (!(Test-Path "backup-demo-artifacts")) { New-Item -ItemType Directory -Path "backup-demo-artifacts" | Out-Null }
if (Test-Path "tests\saucedemo-checkout") { Move-Item "tests\saucedemo-checkout" "backup-demo-artifacts\saucedemo-checkout" }
if (Test-Path "playwright-reports") { Move-Item "playwright-reports" "backup-demo-artifacts\playwright-reports" }

git status --short --branch
git remote -v
```

If the flow is clean, proceed with the rerun. If not, stop and fix the repo or credentials first.

---

## Enterprise Standard Principles

1. Never overwrite working evidence without backup.
2. Preserve the current generated artifacts before any rerun.
3. Use a clean demo space or archived backup folder for reproduction.
4. Keep only required project files visible in the working tree.
5. Validate the repo state before any generation or push.
6. Avoid committing secrets or environment tokens to source control.
7. Keep reports actionable, timestamped, and stored in a dedicated folder.
8. Document assumptions, outcomes, and any open risk clearly.
9. Keep workflow instructions clean; do not encode approval or repo policy into markdown runbooks.

---

## Dynamic Repository Naming

Use a variable-driven repo name for all fresh demo work instead of hardcoding a one-off repository URL in the workflow file.

Example:

```powershell
$RepoName = "AgenticE2EQA-Demo"
$RepoOwner = "te82"
$RepoUrl = "https://github.com/$RepoOwner/$RepoName.git"
```

Use this pattern for future reruns and demo repos:

```text
https://github.com/te82/AgenticE2EQA-Demo.git
```

This keeps the repo name easy to change without editing multiple workflow prompts.

---

## Required Project Layout

Keep the following as the visible working project:

- README.md
- package.json
- package-lock.json
- playwright.config.ts
- E2EtestlngPromptFile.md
- specs/
- tests/
- user-stories/

Archive the following before a fresh rerun:

- backup-demo-artifacts/
  - saucedemo-checkout/
  - playwright-reports/
  - other temporary or legacy generated outputs

---

## Safe Preflight Checklist

Before any rerun:

1. Confirm the repository is clean.
2. Check the active Git remote.
3. Move old generated artifacts to backup-demo-artifacts if reusing the same repo.
4. Verify required folders exist.
5. Confirm no secrets are present in project configuration or reports.
6. Record the current commit SHA before any new demo execution.

Command checklist:

```bash
git status --short --branch
git remote -v
git rev-parse --short HEAD
```

---

## Backup Procedure

Use this procedure before a fresh rerun:

```powershell
Set-Location "C:\Users\rgajula3\Downloads\Agentic AI Automation\AgentE2EQAWorkflow-Playwright"
if (!(Test-Path "backup-demo-artifacts")) { New-Item -ItemType Directory -Path "backup-demo-artifacts" | Out-Null }
if (Test-Path "tests\saucedemo-checkout") { Move-Item "tests\saucedemo-checkout" "backup-demo-artifacts\saucedemo-checkout" }
if (Test-Path "playwright-reports") { Move-Item "playwright-reports" "backup-demo-artifacts\playwright-reports" }
```

This preserves prior test artifacts while creating a clean working area.

---

## Keep-Only-Required Files

The project root should remain focused on the working demo workflow. Keep only the files necessary for execution and documentation.

Recommended visible items:

- README.md
- package.json
- package-lock.json
- playwright.config.ts
- E2EtestlngPromptFile.md
- specs/
- tests/
- user-stories/

Archive nonessential generated files such as:

- old reports
- temporary debug scripts
- screenshots not needed in active workflow
- previous generated suites
- legacy extent-report artifacts

---

## Rerun Procedure

After backup and cleanup, rerun the workflow in the clean project state.

Recommended order:

1. Step 1: Read user story
2. Step 2: Create test plan
3. Step 3: Exploratory testing
4. Step 4: Generate automation scripts
5. Step 5: Execute and heal tests
6. Step 6: Create test report
7. Step 7: Git commit and push

---

## Report Output Standards

Store fresh test evidence in a dedicated folder:

- playwright-reports/
  - extent-report.html
  - agent-metrics.json

Keep the final report path consistent and timestamped if possible.

---

## Git Safety Rules

Before committing:

1. Check for secrets in config files such as .vscode/mcp.json
2. Remove tokens or credentials before commit
3. Verify the repository remote is correct
4. Commit only relevant artifacts
5. Push only after successful validation

```bash
git status --short --branch
git remote -v
git add .
git commit -m "feat(tests): Add complete test suite for SCRUM-101 checkout workflow"
git push -u origin HEAD
```

---

## Demo Recommendation

For leadership demos, prefer a clean demo repo or a clean archive-and-rerun flow rather than rewriting the same generated suite in place.

This keeps:
- the evidence intact
- the demo story coherent
- the project repository easier to present and explain

---

## Final Rule

If you are replaying the workflow for presentation, do not overwrite the previous run in place. Always archive the old artifacts first, then rerun in a clean working area.

This is the enterprise-safe and presentation-friendly approach.
