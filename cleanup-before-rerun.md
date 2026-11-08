# Cleanup Before Full Rerun

Use this file before running the full demo rerun workflow from step 1 to step 7.

This is the preflight cleanup step to preserve old evidence and keep the workspace clean and demo-ready.

---

## Purpose

Before a full rerun:
- archive legacy generated test artifacts
- remove stale reports that may be mistaken for fresh results
- keep only the active workflow files visible in the project root
- reduce confusion before the Planner, Generator, and Healer steps begin

---

## Required cleanup sequence

Run the following commands in PowerShell from the project root:

```powershell
Set-Location "C:\Users\rgajula3\Downloads\Agentic AI Automation\AgentE2EQAWorkflow-Playwright"

if (!(Test-Path "backup-demo-artifacts")) {
    New-Item -ItemType Directory -Path "backup-demo-artifacts" | Out-Null
}

$backupTarget = "backup-demo-artifacts\saucedemo-checkout"
if (Test-Path $backupTarget) { Remove-Item $backupTarget -Recurse -Force }
if (Test-Path "tests\saucedemo-checkout") { Move-Item "tests\saucedemo-checkout" $backupTarget }

$reportTarget = "backup-demo-artifacts\test-results"
if (Test-Path $reportTarget) { Remove-Item $reportTarget -Recurse -Force }
if (Test-Path "test-results") { Move-Item "test-results" $reportTarget }

$playwrightTarget = "backup-demo-artifacts\playwright-report"
if (Test-Path $playwrightTarget) { Remove-Item $playwrightTarget -Recurse -Force }
if (Test-Path "playwright-report") { Move-Item "playwright-report" $playwrightTarget }

$vscodeTarget = "backup-demo-artifacts\.vscode"
if (Test-Path $vscodeTarget) { Remove-Item $vscodeTarget -Recurse -Force }
if (Test-Path ".vscode") { Move-Item ".vscode" $vscodeTarget }

$staleFiles = @(
    "backup-demo-artifacts\temp-checkout-debug.js",
    "backup-demo-artifacts\tmp_git_check.bat",
    "backup-demo-artifacts\install-git.ps1",
    "backup-demo-artifacts\git-commit-push.cmd",
    "backup-demo-artifacts\git-commit-push.ps1",
    "backup-demo-artifacts\saucedemo-login.png"
)

foreach ($file in $staleFiles) {
    if (Test-Path $file) { Remove-Item $file -Force }
}
```

---

## Keep only active project files

After cleanup, the working project should focus on the files required for execution and documentation:

- README.md
- package.json
- package-lock.json
- playwright.config.ts
- E2EtestlngPromptFile.md
- specs/
- tests/
- user-stories/
- scripts/

Archive or remove the following before the rerun:

- old generated reports
- stale screenshots
- debug scripts
- temporary helper files
- environment bootstrap artifacts
- any legacy generated suite copies

---

## Verification step

After cleanup, confirm the active structure is clean:

```powershell
git status --short --branch
dir
```

You should see the project root focused on the working demo files, while archived artifacts remain in backup-demo-artifacts.

---

## Next step

Once cleanup is complete, continue with the full rerun workflow from step 1 in demo-rerun-runbook.md.
