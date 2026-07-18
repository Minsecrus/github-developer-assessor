# Contributing

Thank you for helping improve GitHub Developer Assessor.

## What to contribute

Useful contributions include:

- clearer evidence-collection and attribution guidance;
- better anchors that reduce subjective interpretation;
- role- and domain-specific validation conventions;
- reviewed calibration packets and comparison protocols;
- impact, trajectory, and scarcity evidence sources;
- report and structured-schema improvements;
- corrections that strengthen privacy, fairness, or auditability.

Keep the skill tool-agnostic and focused on inspectable GitHub evidence. Public
evidence is the default; private evidence is allowed only when the user supplies
a token and explicitly selects the repositories. Do not broaden private access
beyond that selection, infer sensitive personal characteristics, or turn
reputation into a capability proxy.

## File responsibilities

- Put the executable workflow and hard rules in `SKILL.md`.
- Put dimension definitions, weights, and anchors in `references/rubric.md`.
- Put impact attribution and scarcity safeguards in `references/impact-and-scarcity.md`.
- Put bands, profile composites, cohorts, and anchors in `references/calibration.md`.
- Put provisional named-anchor evidence and score inputs in
  `references/candidate-anchor-packets.md`; keep activation status in
  `references/calibration.md`.
- Put machine-readable fields and learning-system guidance in `references/evidence-schema.md`.
- Put output structure in `references/report-template.md`.

Avoid duplicating detailed rules across files. Link to the authoritative reference instead.

## Methodology invariants

Every change must preserve these boundaries:

1. E and S are criterion-referenced; the comparison set must not alter them.
2. I is attributable impact, not raw attention or project fame.
3. T is direction of development, not realized seniority.
4. R is relative scarcity, not difficulty, demand, compensation, or capability.
5. Missing evidence is unknown, not zero or negative evidence.
6. Organization membership, commit counts, followers, stars, employer prestige, and association with a famous person do not establish technical depth.
7. Automation changes attribution; it does not erase human specification, decisions, verification, or accountability when those are evidenced.
8. Every scored claim must trace to an inspectable artifact. Private artifacts
   require a visibility marker and stable repository, commit, PR, issue, release,
   or evidence ID even when no publicly accessible URL exists.
9. `unknown` is outside the 0–5 scale; 0 requires applicable inspected evidence
   and cannot represent missing or inaccessible evidence.
10. Anchors use whole or half points only. Scores of 4 and 5 require the evidence
    breadth defined in `references/rubric.md` or a documented exception.

## Calibration contributions

A named person becomes an active calibration anchor only through a frozen evidence packet containing:

- rubric version, snapshot date, role lens, and time window;
- public evidence URLs and artifact-level attribution;
- dimension scores and confidence rationale;
- alternative interpretations and known blind spots;
- independent review under the current rubric.

Do not use real people as negative examples. Prefer synthetic archetypes for lower-band boundaries. Keep candidate anchors explicitly separate from active anchors.

Named calibration anchors remain public-only. Do not place private evidence in a
candidate or active anchor packet.

## Data and model contributions

- Label evidence artifacts before person-level totals.
- Allow ties, incomparability, and abstention.
- Keep human, heuristic, and pseudo-label provenance visible.
- Split evaluation by time and repository family to avoid leakage.
- Do not expose identity or popularity fields to models that estimate E.
- Do not include private evidence in shared benchmark or training exports unless
  that use was separately authorized.
- Report subgroup and domain coverage, calibration, abstention quality, and rank stability.
- Do not describe a heuristic, prompt, or unlabeled score as a validated model.

## Before submitting a change

1. Read `SKILL.md` and every affected file under `references/`.
2. Keep procedural instructions concise and imperative.
3. Preserve the distinction between observation, attribution, inference, and score.
4. Ensure every claim has a public URL or a private visibility marker and stable
   artifact reference; otherwise mark the claim unknown.
5. Update `CHANGELOG.md` for user-visible changes.
6. Explain whether the change affects score comparability with earlier rubric versions.

## Validation

Before proposing a change:

- confirm that the YAML frontmatter in `SKILL.md` contains only `name` and `description`;
- check that every referenced file and relative Markdown link exists;
- verify that dimension weights total 100 and profile weights total 100%;
- verify that behavioral-anchor tables cover 1 through 5 and do not treat
  `unknown` as a numeric anchor;
- verify that incomplete axes use `unknown` or an interval without silent
  renormalization;
- search for contradictions between the workflow, rubric, calibration rules, evidence schema, and report template;
- verify that public-only behavior still works without a token and that private
  contents are not inspected before repository selection;
- run a sensitivity check on at least one public evidence packet when score behavior changes;
- have two independent reviewers score at least one representative packet when
  behavioral anchors change, then record exact agreement, agreement within 0.5,
  and mean absolute difference by affected subdimension;
- avoid publishing private source, credentials, or unnecessary personal data in
  test artifacts.

If the Codex skill-creator utilities are available, run:

```text
quick_validate.py path/to/github-developer-assessor
```

## Change guidelines

- Make focused changes with a stated failure mode and intended correction.
- Prefer evidence-linked examples over abstract adjectives.
- Version breaking rubric, schema, weight, and band changes.
- Use neutral language and express uncertainty directly.
- Do not commit generated reports containing unnecessary personal data.

By contributing, you agree that your contribution is licensed under the MIT License included in this repository.
