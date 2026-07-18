# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

### Added

- Complete 1–5 behavioral anchors for every E/S/I/T/R subdimension, with
  `unknown` explicitly outside the scale.
- Evidence-breadth rules for half anchors, single-artifact caps, high anchors,
  incomplete axes, score intervals, and band-gate uncertainty.
- Auditable subdimension metadata for attribution, evidence breadth, time span,
  contradictions, confidence, and cap exceptions.
- Inter-rater checks for exact agreement, agreement within 0.5, and mean
  absolute anchor difference.
- Separate engineering capability (E), stewardship (S), ecosystem impact (I), development trajectory (T), technology scarcity (R), and confidence (C) axes.
- Attributable-impact model that distinguishes attention, adoption, authority, technical leverage, community leverage, and knowledge diffusion.
- Project attribution ranges, diminishing returns, ecosystem normalization, and anti-double-counting rules.
- Capability-band gates, high-depth specialist handling, role-conditioned profile scores, cohort comparison rules, and rank-sensitivity checks.
- Versioned calibration-packet protocol and an initial registry of candidate—not yet normative—representative accounts from the pilot assessments.
- Provisional, evidence-linked E/S/I/T/R packets for every retained candidate
  anchor, including the `liyupi` developer-education packet and the
  `Sunrisepeak` modern-C++ tooling and community-maintainer packet, plus the
  `sheepbox8646` multi-agent-platform system-owner packet.
- Machine-readable evidence and assessment schemas designed for weak supervision, pairwise labeling, active learning, and axis-specific models.
- Explicit attribution guidance for AI- or bot-assisted implementation.
- Domain-fair validation guidance for embedded, hardware, systems, compiler, application, library, and educational work.
- Optional authenticated assessment of user-selected private GitHub repositories,
  including repository selection, private artifact provenance, and evidence-
  boundary reporting.

### Changed

- Replaced the 1.x single weighted total with a multi-axis v2 report. Earlier totals remain readable but are not directly comparable with v2 axes or profile scores.
- Made impact a scored, attributable construct instead of treating all popularity signals only as navigation hints.
- Made technology scarcity optional and cohort-relative, separate from engineering difficulty, demand, compensation, and market value.
- Expanded the report template to expose dimension evidence, attribution, confidence components, unknowns, profile weights, and comparison stability.
- Replaced the public-only hard boundary with public-by-default behavior plus
  explicitly authorized and selected private evidence; named calibration anchors
  remain public-only.

### Fixed

- Prevented high-impact maintainers, educators, and fast-growing contributors from being systematically understated by a capability-only total.
- Prevented famous projects, organization membership, and raw attention from automatically inflating engineering scores.

## 1.0.0 - 2026-07-17

### Added

- Evidence-first workflow for assessing publicly demonstrated engineering capability from a GitHub account.
- Quick, standard, and deep assessment modes.
- Role-specific evaluation lenses and a weighted scoring model.
- Detailed scoring anchors in `references/rubric.md`.
- Reusable assessment structure in `references/report-template.md`.
- Guidance for organization contributions, code review, maintenance, confidence, uncertainty, and ethical limits.
- Project documentation, contribution guidance, and MIT licensing.
