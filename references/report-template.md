# GitHub Developer Assessment v2

## Scope and evidence boundary

- Account: `[username]`
- Profile URL: `[URL]`
- Snapshot date: `[YYYY-MM-DD]`
- Time window: `[default: last 24 months; note lifetime evidence used separately]`
- Depth: `[quick / standard / deep]`
- Role lens: `[backend / frontend / AI / DevOps / systems / embedded / other]`
- Assessment profile: `[general / senior-ic / staff / maintainer / high-potential / open-source-impact]`
- Expected level: `[optional comparison target]`
- Cohort: `[optional; define population, date, and sample size, or not assessed]`
- Evidence mode: `[public-only / public plus selected private repositories]`
- Selected private repositories: `[none / names or user-approved aliases]`
- Other evidence boundary: `[any explicitly listed external sources or exclusions]`

## Executive assessment

`In one paragraph, state the strongest demonstrated capability, capability band, role fit, attributable impact, trajectory, and the caveat most likely to change the result.`

## Result at a glance

| Axis | Score or status | Confidence | Interpretation | Strongest evidence |
|---|---:|---|---|---|
| Engineering capability (E) | /100 | | Criterion-referenced technical evidence | |
| Stewardship and ownership (S) | /100 | | Sustained responsibility and contributor leverage | |
| Ecosystem impact (I) | /100 or unknown | | Attributable adoption, authority, and leverage | |
| Development trajectory (T) | /100 or unknown | | Direction of growth within the stated window | |
| Technology scarcity (R) | /100, unknown, or not assessed | | Cohort-relative context; not capability | |

- Capability band: `Insufficient evidence / Exploratory / Contributor / Independent builder / System owner / Maintainer or technical leader`
- Specialist modifier: `none / high-depth contributor / technical specialist`
- Overall confidence: `High / Medium / Low ([0–1] if machine-readable output is used)`
- Confidence basis: `coverage, attribution, sampling stability, and identity certainty`

### Score completeness

For each axis, state `known_weight`. Use a point estimate only when all weighted
subdimensions are scored. At 60–99 known weight, report an interval without
renormalizing unknown dimensions. Below 60, report `unknown`. If an interval
crosses a capability-band gate, report the adjacent possible bands rather than
choosing one. `Insufficient evidence` is distinct from directly observed
exploratory behavior.

For every scored subdimension record:

- whole or half anchor and confidence;
- evidence IDs or URLs and attribution strength;
- evidence count, independent contexts, and time span;
- contradictions;
- any documented exception to the normal single-artifact cap of 3.

Do not replace this table with a single total.

## Engineering capability (E)

| Subdimension | Anchor | Weight | Result | Evidence and reasoning |
|---|---:|---:|---:|---|
| Implementation quality | /5 | 20 | /20 | |
| Architecture and interfaces | /5 | 25 | /25 | |
| Problem solving and debugging | /5 | 20 | /20 | |
| Correctness and reliability | /5 | 20 | /20 | |
| Constraint depth | /5 | 15 | /15 | |
| **E** | | **100** | **/100** | |

Explain any role-specific validation convention, such as hardware measurements, compiler regression suites, or production migration evidence.

## Stewardship and ownership (S)

| Subdimension | Anchor | Weight | Result | Evidence and reasoning |
|---|---:|---:|---:|---|
| Ownership and delivery | /5 | 30 | /30 | |
| Maintenance and release | /5 | 25 | /25 | |
| Collaboration and review | /5 | 25 | /25 | |
| Governance and contributor leverage | /5 | 20 | /20 | |
| **S** | | **100** | **/100** | |

State whether the qualitative gate for the reported capability band is met. If E is high but S is sparse, use a specialist label instead of implying maintainership.

## Ecosystem impact (I)

Complete in standard and deep mode when evidence permits. Separate attention from adoption and multiply project influence by individual attribution.

| Subdimension | Anchor | Weight | Result | Evidence and attribution |
|---|---:|---:|---:|---|
| Adoption | /5 | 30 | /30 | |
| Downstream technical leverage | /5 | 20 | /20 | |
| Authority and standards | /5 | 20 | /20 | |
| Community leverage | /5 | 15 | /15 | |
| Knowledge diffusion | /5 | 10 | /10 | |
| Durable reach | /5 | 5 | /5 | |
| **I** | | **100** | **/100** | |

For each material project, record the observed project influence, the subject's attribution interval, depth of contribution, recency, and durability. State explicitly when only attention metrics are available.

## Development trajectory (T)

| Subdimension | Anchor | Weight | Result | Time-window evidence |
|---|---:|---:|---:|---|
| Difficulty progression | /5 | 30 | /30 | |
| Independent external validation | /5 | 25 | /25 | |
| Learning and follow-through | /5 | 25 | /25 | |
| Scope expansion | /5 | 20 | /20 | |
| **T** | | **100** | **/100** | |

Compare appropriate 6-, 12-, and 24-month slices. Distinguish submitted, reviewed, approved, merged, released, and adopted work.

## Technology scarcity (R), if requested

- Cohort, region, and snapshot date:
- Evidence for supply and barriers:
- Adjacent-skill substitution assumptions:
- Scarcity result and confidence:
- Separate current market-demand evidence, if the user authorized it:

Never add R to E or describe rarity alone as engineering superiority.

## Optional profile score

Include only if a selection question requires a composite.

- Profile: `[name]`
- Formula and weights: `[for example, 0.40E + 0.30S + 0.25I + 0.05T]`
- Profile score: `/100`
- Missing-axis treatment: `[none / no score / explicit provisional recalculation]`
- Sensitivity: `[whether the result or rank changes under another relevant profile]`

Call this a **profile score**, not an engineering score. Never compare scores produced with different profiles.

## Representative evidence ledger

### `[repository or artifact]`

- Visibility: `public / private`
- URL or stable artifact reference: `[URL / repository@commit / PR or issue ID]`

- Classification: `personal-original / organization-owned / external contribution / fork / educational / other`
- Observed role: `implementation / decision / verification / accountability / review / release / governance`
- Attribution interval and rationale:
- Automation or AI involvement: `observed / reported / unknown`; effect on attribution:
- Scope and constraints:
- Validation and outcome:
- Impact type: `attention / adoption / authority / technical leverage / community leverage / knowledge diffusion`
- Evidence:
  - `[commit / PR / issue / release / code / downstream-use URL or stable artifact reference]` — `observation and supported claim`
- Contradictory evidence or limitations:

Repeat for 3–5 projects in standard mode and enough artifacts to stabilize the result in deep mode.

## Organization and external contributions

For each relevant organization or upstream project:

### `[organization or repository]`

- Visibility: `public / private`
- URL or stable artifact reference: `[URL / repository@commit / evidence ID]`

- Context: `company / community / classroom / personal group / uncertain`
- Verified artifacts: `PRs, reviews, issues, commits, releases, governance records`
- Contribution depth: `cosmetic / scoped / major / subsystem / owner or releaser`
- Outcome: `submitted / reviewed / merged / released / adopted`
- What this supports:
- What it does not prove:

Membership, commit presence, or association with a famous repository is not substantive attribution by itself.

## Relative placement, if requested

- Defined cohort:
- Dimension-level percentiles or tiers:
- Sample and normalization method:
- Stability under time window, profile, and highest-impact-project removal:
- Calibration packets used:

If ordering is unstable, report tiers or intervals rather than a precise rank.

## Strongest demonstrated capabilities

1. `Capability` — `direct evidence and interpretation`
2. `Capability` — `direct evidence and interpretation`
3. `Capability` — `direct evidence and interpretation`

## Risks, contradictions, and unknowns

- `Missing due to unselected or inaccessible repositories, offline work, or evidence outside the window`
- `Inspectably negative or contradictory evidence`
- `Attribution or identity ambiguity`
- `Role-relevant area not demonstrated within the stated evidence boundary`
- `Claim most sensitive to sampling or scoring choices`

Keep missing evidence separate from negative evidence.

## Suggested interview or verification questions

Tie every question to an observed artifact:

1. “In PR X, which decisions were yours, what alternatives did you reject, and how did you verify the result?”
2. “Repository Y changed architecture between releases. What constraint forced the redesign?”
3. “How would you reproduce and test the concurrency, compatibility, or physical boundary visible in module Z?”
4. “Which production or user constraints are absent from the inspected implementation?”
5. “Where did automation assist, and which specification, review, and accountability steps remained yours?”

## Limitations

This report evaluates only the stated evidence boundary. A public-only report may
omit private repositories and company work; an authenticated report still omits
unselected or inaccessible repositories. Either mode may omit pair programming,
unlinked accounts, offline engineering, and contributions obscured by repository
history or automation. Private artifact references may not be accessible to
every report reader; state that as a reader-verifiability limitation without
treating private visibility itself as weaker technical evidence.
Popularity, technology rarity, and organizational association are not
substitutes for inspectable engineering evidence. The report should inform, not
replace, technical interviews, work samples, and reference checks.
