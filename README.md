# GitHub Developer Assessor

An evidence-first Agent Skill for assessing what a GitHub account demonstrates:
engineering capability, stewardship, attributable ecosystem impact, development
trajectory, and—when a cohort can be defined—technology scarcity. It uses
public evidence by default and can optionally inspect private repositories that
the user authorizes and selects with a supplied GitHub token.

Version 2 replaces the old single-score model with separate axes. This prevents popularity from masquerading as engineering ability while still giving real credit for adoption, standards work, education, community leverage, and fast growth.

## What it measures

| Axis | Meaning | Reference frame |
|---|---|---|
| E — Engineering capability | Implementation, architecture, debugging, reliability, and constraint depth | Criterion-referenced |
| S — Stewardship and ownership | Delivery, maintenance, review, releases, governance, and contributor leverage | Criterion-referenced |
| I — Ecosystem impact | Attributable adoption, authority, downstream leverage, community leverage, and knowledge diffusion | Ecosystem-normalized |
| T — Development trajectory | Recent growth in difficulty, validation, follow-through, and scope | Compared with the subject's earlier evidence |
| R — Technology scarcity | Supply, entry barriers, cross-domain coupling, failure cost, and substitutability | Optional, cohort-relative, and time-sensitive |
| C — Confidence | Coverage, attribution, sampling stability, and identity certainty | Evidence quality |

The axes remain visible. An optional role-conditioned profile score may support a specific selection question, but it is never called an “engineering score,” and scarcity is never added to capability.

## What you need to provide

Only the GitHub account is required. Defaults are:

- role lens: general engineering;
- expected level: no preset target;
- depth: standard;
- time window: most recent 24 months;
- assessment profile: general;
- cohort and scarcity: not assessed unless they can be defined credibly.

Specify a role, expected level, depth, window, profile, or comparison cohort only when it matters to your question.

Private evidence is optional. A user may paste a GitHub token in the
conversation. If private repositories are not named in the same request, the
skill lists the accessible private repositories and waits for the user to select
which ones to inspect. Only the selected repositories enter the assessment.

## Example invocations

> Assess `https://github.com/example` using the defaults.

> Assess `example` for a senior backend role. Use standard depth, focus on the last 24 months, inspect organization contributions, and cite the strongest evidence.

> Compare A and B for an open-source maintainer role. Use the same snapshot and evidence window, report E/S/I/T separately, then apply the maintainer profile and test whether the ordering is stable.

> Assess an embedded developer's absolute capability separately from the scarcity of their verified hardware and firmware skill combination.

> Assess `example` and include private repositories. I will provide a GitHub
> token; first list the private repositories I can choose from.

## Method in brief

1. Verify identity and define whether the boundary is public-only or includes
   user-selected private repositories.
2. Build an artifact-level ledger from code, diffs, reviews, issues, releases, downstream use, and maintenance history.
3. Attribute implementation, decisions, verification, and accountability—including where bots or AI assisted.
4. Score E and S without popularity or prestige signals.
5. Score I from attributable adoption, authority, and leverage rather than attention alone.
6. Score T from progression and external validation, including partial but discounted evidence from open work.
7. Add R only for a named cohort and snapshot; keep market demand separate.
8. Report confidence, unknowns, contradictions, and sensitivity to reasonable scoring choices.

Capability bands use quantitative gates plus qualitative evidence. High
technical depth with limited stewardship within the stated evidence boundary is
reported as a specialist pattern instead of being mislabeled as either junior
or maintainer.

Subdimensions use behaviorally anchored 0–5 judgments. `Unknown` is not a
number, half anchors require evidence from both adjacent levels, and high
anchors require repeated evidence rather than a single famous artifact.

## Files

- `SKILL.md` — complete workflow and non-negotiable assessment rules.
- `references/rubric.md` — E/S/I/T/R dimensions, weights, and anchors.
- `references/impact-and-scarcity.md` — impact attribution, normalization, diminishing returns, and scarcity safeguards.
- `references/calibration.md` — capability bands, profile weights, cohort comparisons, anchor protocol, and sensitivity tests.
- `references/candidate-anchor-packets.md` — provisional scored packets,
  evidence links, contradictions, and role-conditioned R cohorts for named
  candidate anchors.
- `references/evidence-schema.md` — auditable JSON concepts and a semi-supervised-ready labeling path.
- `references/report-template.md` — reusable multi-axis report structure.
- `CONTRIBUTING.md` — contribution and validation guidance.
- `CHANGELOG.md` — release history.
- `LICENSE` — MIT License.

## Learning-assisted assessment

The schema supports future weak supervision, active learning, pairwise labels, and axis-specific models. It deliberately does not claim that a trained model exists. Language models and heuristics are treated as auditable weak labelers; high-stakes totals and band decisions remain evidence-linked and human-reviewable.

## Recommended capabilities

The agent works best when it can browse GitHub, search commits/issues/pull
requests/reviews/releases, inspect code and diffs, and optionally use the GitHub
API or CLI. Authenticated API or CLI access is required for selected private
repositories. It remains usable without API access, but confidence may be lower.

## Scope and privacy

The skill evaluates only the stated evidence boundary. It accesses private
repositories only when the user supplies a token and selects them. Private
visibility does not change the scoring rubric, and missing or unselected work is
not treated as weak ability. The skill does not infer protected or sensitive
personal characteristics or infer market value from GitHub rarity alone.

See [CONTRIBUTING.md](CONTRIBUTING.md) before proposing changes.

## License

MIT License. Copyright (c) 2026 Minsecrus. See [LICENSE](LICENSE).
