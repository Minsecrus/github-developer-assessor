# Calibration, Bands, and Comparison Protocol

Use this reference whenever an assessment assigns a capability band, compares developers, reports a percentile, or produces a profile-weighted composite.

## 1. Calibrate axes before people

Score the observable evidence against the rubric first. Only then compare the result with calibration packets. Do not begin with a person's reputation, employer, follower count, or an expected level and work backward.

Calibration is versioned. Every calibration packet must record:

- rubric version and snapshot date;
- role lens, time window, and evidence boundary;
- evidence URLs or archived identifiers;
- E, S, I, and T dimension scores with rationales;
- attribution and confidence notes;
- known blind spots or contradictory evidence.

Reassess active packets whenever dimension weights, band gates, or attribution rules change. Aim for at least three packets per band and domain: a lower-bound, typical, and upper-bound example.

## 2. Capability bands

Bands describe demonstrated engineering scope. They are not job titles, compensation recommendations, or universal seniority labels.

| Band | Quantitative gate | Required qualitative evidence |
|---|---:|---|
| Insufficient evidence | E is unknown or its interval crosses the Contributor gate | The stated evidence boundary cannot support a reliable demonstrated-scope band. This is not a negative capability judgment. |
| Exploratory | E point estimate < 40, or E interval upper bound < 40 | Inspected evidence directly shows learning or exploratory artifacts, while independent validated delivery is not yet established. |
| Contributor | E >= 40 | At least one attributable, validated, scoped contribution. |
| Independent builder | E >= 55 and S >= 35 | Repeated end-to-end delivery or clear ownership of a non-trivial component. |
| System owner | E >= 65 and S >= 55 | Sustained ownership across design, delivery, reliability, and change over time. |
| Maintainer / technical leader | E >= 75 and S >= 75 | Verified cross-contributor review, release, governance, or technical-direction responsibility. |

The gates are necessary, not sufficient. Apply a gate to an interval only when
its lower bound satisfies the threshold. If a credible interval crosses a gate,
report the adjacent possible bands and the evidence needed to resolve them.
`Exploratory` requires direct inspectable evidence of exploratory behavior;
mere evidence scarcity uses `Insufficient evidence` instead. A high E
score with limited stewardship should be reported as a **high-depth
contributor** or **technical specialist**, not forced into a lower engineering
interpretation or promoted to maintainer.

Impact never substitutes for an E or S gate. A popular project can increase I; it cannot by itself establish implementation depth, architecture judgment, or maintainership.

## 3. Candidate anchor registry

Named anchors are useful only when backed by frozen, reproducible evidence
packets. The following names came from the 2026-07-18 pilot. Their packets now
exist, but they have not completed formal independent activation review and
remain **candidate anchors**, not active normative anchors:

Named calibration packets remain public-only so every reviewer can inspect the
same artifacts. Private evidence may inform an individual assessment but cannot
enter a candidate or active anchor packet.

| Candidate packet | Intended lens | E | S | I | T | R | Confidence | Candidate use |
|---|---|---:|---:|---:|---:|---:|---|---|
| torvalds | systems / kernel maintainer | 98 | 98 | 94 | 70 | 90 | High | Maintainer or technical-leader packet |
| gaogaotiantian | Python runtime and diagnostics maintainer | 90 | 93 | 89 | 95 | 88 | High | Maintainer packet |
| mattpocock | TypeScript developer tools / educator-maintainer | 78 | 83 | 87 | 85 | 63 | Medium | Maintainer and ecosystem-impact packet; S sensitivity 77–83 |
| lvy010 | systems and developer tools / emerging contributor | 74 | 53 | 44 | 80 | unknown (70 diagnostic) | Medium | Independent-builder and high-trajectory packet; R confidence low |
| liyupi | full-stack developer education / community maintainer | 54 | 66 | 60 | 60 | 61 | Medium | Contributor-to-independent-builder boundary and education-impact packet |
| Sunrisepeak | modern C++ build and package tooling / community maintainer | 78 | 78 | 64 | 78 | unknown (69 diagnostic) | Medium | Maintainer packet with AI-attribution, self-review, and concentrated-ecosystem sensitivity |
| sheepbox8646 | multi-agent platform / isolated-workspace system owner | 74 | 73 | 69 | 73 | unknown (71 diagnostic) | Medium | System-owner packet with explicit AI attribution, release governance, and young-project durability sensitivity |

Scores are whole-number displays calculated from whole or half subdimension
anchors. See [`candidate-anchor-packets.md`](candidate-anchor-packets.md) for
the inputs, evidence boundary, contradictions, and scarcity cohorts. In
particular, R is role-conditioned and is **not comparable across rows**.

Until a packet has been independently reviewed, use it only as a provisional
challenge reference and disclose that status. Do not use real people as
negative anchors; use synthetic archetypes for lower bands.

## 4. Profile-weighted composites

The axes are the primary output. A composite is optional and must answer a stated selection question. Label it **profile score**, never engineering score.

| Profile | E | S | I | T | Typical question |
|---|---:|---:|---:|---:|---|
| general | 55% | 20% | 15% | 10% | What is the balanced assessment within the stated evidence boundary? |
| senior-ic | 65% | 15% | 10% | 10% | How strong is the individual technical contribution? |
| staff | 50% | 25% | 20% | 5% | Can this person shape systems and multiply others? |
| maintainer | 40% | 30% | 25% | 5% | Can this person sustain a shared project and ecosystem? |
| high-potential | 50% | 10% | 10% | 30% | What do current evidence and growth rate jointly indicate? |
| open-source-impact | 30% | 20% | 45% | 5% | How much attributable open-source leverage is demonstrated? |

Formula:

```text
profile_score = wE * E + wS * S + wI * I + wT * T
```

Rules:

1. State the profile and weights next to the score.
2. Never include R in a composite. Scarcity is context, not capability.
3. If I or T is unknown, do not silently renormalize weights. Prefer no composite. If a provisional reduced-evidence score is necessary, show the omitted axes and recalculated weights explicitly.
4. A composite does not override band gates or dimension-level concerns.
5. Do not rank profiles built with different weights.

## 5. Cohort-relative comparisons

A percentile or relative label is valid only when the cohort is defined. Record:

- role or domain;
- experience or demonstrated-scope band;
- geography if market claims are involved;
- snapshot date and time window;
- sample inclusion rules and sample size;
- public/private evidence-selection rule;
- missing-data policy.

Exact percentile or rank comparisons require the same evidence-selection rule
for every account. If one account includes selected private evidence and another
does not, disclose that they are not directly comparable and report separate
profiles, broad tiers, or intervals instead of a precise rank.

Prefer dimension-level percentiles over a single total. Use log transforms for long-tailed counts, winsorize obvious outliers, and apply Bayesian or empirical shrinkage to tiny samples. Report the raw observation alongside the normalized value.

Never present a GitHub-wide percentile unless a defensible GitHub-wide sampling frame exists. “Top 5% among the 40 assessed TypeScript maintainer candidates in this 24-month snapshot” is acceptable; “top 5% of developers” is not.

## 6. Two-pass anti-halo procedure

For standard and deep assessments:

1. **Evidence pass:** inventory artifacts and score E/S/T without looking at followers, stars, sponsorship, employer prestige, or press where practical.
2. **Context pass:** score I and R, then revisit only claims for which the new context supplies direct evidence.
3. **Challenge pass:** identify the strongest alternative interpretation, missing counterevidence, and any score that would move by more than five points under a reasonable attribution change.

For high-stakes comparisons, have a second reviewer independently score a redacted evidence packet. Resolve disagreements by citing artifacts, not authority.

## 7. Sensitivity and stability checks

Run these checks before publishing a ranked table:

- vary each contested dimension by its plausible error range;
- test at least two relevant profiles;
- remove the single highest-impact project;
- cap project-level impact using the diminishing-returns rule;
- compare 12-, 24-, and 36-month windows when feasible;
- check whether identity uncertainty or adding/removing authenticated private
  evidence would change the conclusion.

If rank order changes materially, report a tier or interval instead of a precise ordinal ranking.

## 8. Calibration maintenance

Track calibration quality over time:

- inter-rater agreement by dimension;
- exact-anchor agreement, agreement within 0.5, and mean absolute anchor
  difference using independently scored evidence packets;
- score drift between rubric versions;
- prediction error against later observable outcomes;
- subgroup coverage and domain imbalance;
- frequency of unknown and low-confidence fields;
- reversals caused by newly discovered evidence.

Calibration data should improve consistency, not turn historical judgments into unquestioned ground truth.

Treat a mean absolute difference above 0.5 on a subdimension, or repeated
differences of 1 or more on the same evidence, as a prompt to revise its
behavioral anchors or evidence-selection guidance. Do not add more scale points
to disguise disagreement.
