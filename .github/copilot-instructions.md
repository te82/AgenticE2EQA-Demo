# Copilot Instructions for this QA Demo Workspace

## Default operating principles

- Keep the workflow documentation descriptive, not policy-heavy.
- Do not hardcode a repository URL into the operational prompt when a repo name variable can be used instead.
- Prefer a clean demo repo or archived backup flow over overwriting generated artifacts in place.
- Preserve prior evidence before rerunning tests or reports.
- Validate repo state, remote configuration, and credentials before any push.
- Never commit secrets, tokens, or local MCP credentials to the repository.
- Keep the working tree focused on required demo assets and archived legacy outputs.

## Safe rerun behavior

Before any rerun or redeploy:

1. Review the current git status and active remote.
2. Archive legacy artifacts into backup-demo-artifacts when reusing the workspace.
3. Confirm the repo name and owner are correct.
4. Prefer dynamic repo naming such as:
   - Repo name: AgenticE2EQA-Demo
   - URL pattern: https://github.com/te82/AgenticE2EQA-Demo.git
5. Only then proceed with generation, execution, or push steps.

## Approval and policy guidance

- Approval behavior belongs in the Copilot / VS Code settings layer, not in the workflow markdown itself.
- Use repo-level guidance here to keep safe defaults for reruns, Git operations, and artifact handling.
- Keep [E2EtestlngPromptFile.md](../E2EtestlngPromptFile.md) as a reference workflow, not as the place to store approval policy.

## Git hygiene rules

- Check git status before commit and push.
- Verify repo remote and access before pushing.
- Commit only relevant artifacts.
- Use a clear conventional commit message for demo work.
- If the repo or credentials are incorrect, stop and fix access before continuing.

## Preferred naming pattern

When a demo repo is required, use:

```powershell
$RepoOwner = "te82"
$RepoName = "AgenticE2EQA-Demo"
$RepoUrl = "https://github.com/$RepoOwner/$RepoName.git"
```

This pattern should be reused for all future generated commands and runbooks.
