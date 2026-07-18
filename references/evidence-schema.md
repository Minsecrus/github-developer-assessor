# Evidence Schema and Learning-Ready Data

Use this reference when assessments must be machine-readable, compared at scale, audited later, or used to build assisted labeling and semi-supervised systems.

The schema stores observations separately from judgments. A GitHub count, an observed code change, an attribution estimate, and a rubric score are different data and must not be collapsed into one field.

## 1. Evidence item

Each evidence item should follow this conceptual JSON shape. Implementations may add fields but should preserve the meanings below.

```json
{
  "id": "ev-001",
  "url": "https://github.com/org/repo/pull/123",
  "artifact_ref": "org/repo#pull-123@abc1234",
  "evidence_type": "pull_request",
  "repository": "org/repo",
  "visibility": "public",
  "classification": ["implementation", "review", "reliability"],
  "observed_at": "2026-07-18T00:00:00Z",
  "event_date": "2026-06-02",
  "subject_identity": "github-login",
  "contribution": {
    "role": "primary_implementer",
    "implementation_share": [0.6, 0.8],
    "decision_share": [0.4, 0.7],
    "verification_share": [0.5, 0.8],
    "accountability_share": [0.4, 0.7],
    "automation_used": "unknown",
    "attribution_rationale": "Authored the change, responded to review, and added validation."
  },
  "artifact": {
    "scope": "reworked cache invalidation across three packages",
    "constraints": ["backward compatibility", "concurrency"],
    "validation": ["tests", "review", "release follow-up"],
    "outcome": "merged and released"
  },
  "impact": {
    "kind": ["adoption", "technical_leverage"],
    "observation": "removed a downstream migration step",
    "project_share": [0.08, 0.15]
  },
  "confidence": 0.82,
  "notes": "No private design discussion was available."
}
```

### Required distinctions

- `event_date` is when the work happened; `observed_at` is when the assessor captured it.
- `visibility` is `public` or `private`. Private evidence is valid when it came
  from a user-authorized selected repository; visibility is not an evidence-
  quality score.
- `artifact_ref` is a stable repository plus commit, PR, issue, release, or file
  locator. It is required when a private URL is omitted or will not be available
  to every report reader.
- `classification` describes what the artifact can support; it is not a score.
- attribution shares are intervals, not invented precision.
- unknown automation use is `unknown`, not `none`.
- outcome and impact describe observed consequences, not inferred fame.
- one artifact may support several dimensions, but each scoring use must be justified and double counting checked.

## 2. Assessment record

```json
{
  "schema_version": "2.1",
  "rubric_version": "2.0",
  "subject": "github-login",
  "snapshot_date": "2026-07-18",
  "time_window_months": 24,
  "evidence_boundary": {
    "mode": "public_only",
    "selected_private_repositories": [],
    "private_selection": "none"
  },
  "role_lenses": ["backend", "maintainer"],
  "profile": "maintainer",
  "cohort": null,
  "axes": {
    "E": {
      "status": "scored",
      "score": 74,
      "range": null,
      "known_weight": 100,
      "confidence": 0.78,
      "dimensions": {
        "implementation_quality": {
          "status": "scored",
          "anchor": 3.5,
          "weight": 20,
          "evidence_ids": ["ev-001"],
          "evidence_count": 1,
          "independent_contexts": 1,
          "time_span_months": 1,
          "attribution": "strong",
          "confidence": 0.76,
          "contradictions": [],
          "cap_exception": {
            "applied": true,
            "rationale": "One PR contains independently inspectable design, implementation, review, and release follow-up."
          }
        },
        "architecture_and_interfaces": {
          "status": "scored",
          "anchor": 4,
          "weight": 25,
          "evidence_ids": ["ev-002", "ev-003"],
          "evidence_count": 2,
          "independent_contexts": 1,
          "time_span_months": 9,
          "attribution": "strong",
          "confidence": 0.79,
          "contradictions": [],
          "cap_exception": {"applied": false, "rationale": null}
        },
        "problem_solving_and_debugging": {
          "status": "scored",
          "anchor": 4,
          "weight": 20,
          "evidence_ids": ["ev-004", "ev-005"],
          "evidence_count": 2,
          "independent_contexts": 2,
          "time_span_months": 11,
          "attribution": "strong",
          "confidence": 0.81,
          "contradictions": [],
          "cap_exception": {"applied": false, "rationale": null}
        },
        "correctness_and_reliability": {
          "status": "scored",
          "anchor": 3,
          "weight": 20,
          "evidence_ids": ["ev-001", "ev-006"],
          "evidence_count": 2,
          "independent_contexts": 1,
          "time_span_months": 8,
          "attribution": "strong",
          "confidence": 0.74,
          "contradictions": ["No inspectable production incident history"],
          "cap_exception": {"applied": false, "rationale": null}
        },
        "constraint_depth": {
          "status": "scored",
          "anchor": 4,
          "weight": 15,
          "evidence_ids": ["ev-004", "ev-007"],
          "evidence_count": 2,
          "independent_contexts": 2,
          "time_span_months": 14,
          "attribution": "medium",
          "confidence": 0.71,
          "contradictions": [],
          "cap_exception": {"applied": false, "rationale": null}
        }
      }
    },
    "S": {"status": "scored", "score": 68, "range": null, "known_weight": 100, "confidence": 0.72, "dimensions": {}},
    "I": {"status": "scored", "score": 55, "range": null, "known_weight": 100, "confidence": 0.65, "dimensions": {}},
    "T": {"status": "scored", "score": 61, "range": null, "known_weight": 100, "confidence": 0.59, "dimensions": {}},
    "R": {"status": "not_assessed", "score": null, "range": null, "known_weight": 0, "confidence": null, "dimensions": {}}
  },
  "profile_score": {
    "score": 66.8,
    "weights": {"E": 0.4, "S": 0.3, "I": 0.25, "T": 0.05},
    "provisional": false
  },
  "capability_band": "system_owner",
  "band_gate_status": "met",
  "confidence": {
    "overall": 0.7,
    "coverage": 0.72,
    "attribution": 0.68,
    "sampling_stability": 0.63,
    "identity": 0.98
  },
  "evidence_ids": ["ev-001", "ev-002", "ev-003", "ev-004", "ev-005", "ev-006", "ev-007"],
  "unknowns": ["private incident-response history"],
  "contradictions": [],
  "limitations": ["public GitHub evidence only"]
}
```

E is expanded above to demonstrate the required dimension metadata; S, I, and T
are abbreviated only to keep the conceptual example readable. Production
records must expand every scored dimension in the same form.

Axis `status` is `scored`, `interval`, `unknown`, or `not_assessed`. A complete scored axis may
retain full precision internally but normally displays as a whole number. An
incomplete axis stores `score` as `null`, `range` as `[low, high]` when at least
60 weighted points are known, and `known_weight`. Below that threshold it stores
an `unknown` status and explanation.

A subdimension `status` is `scored` or `unknown`. A missing subdimension uses a
null anchor with an explanation; it is never zero. Anchors are whole or half
points only. Record evidence breadth and any exception to the normal
single-artifact cap so high anchors remain auditable.

`evidence_boundary.mode` is `public_only` or
`public_plus_selected_private`. In private mode,
`selected_private_repositories` contains the selected names or user-approved
aliases and `private_selection` records `explicit_in_prompt` or
`selected_after_listing`. Never store the token in an evidence item, assessment
record, export, or limitation field.

## 3. Labels for assisted assessment

For learning systems, label evidence artifacts before labeling people. Recommended supervised units are:

- artifact-to-dimension relevance;
- contribution-role and attribution interval;
- pairwise evidence strength for a named dimension and role lens;
- rubric anchor level from 0 to 5;
- confidence and abstention reason.

Pairwise examples are often more reliable than absolute totals: “For backend reliability, artifact A demonstrates stronger evidence than artifact B.” Allow `tie`, `incomparable`, and `abstain`.

Do not expose identity, follower counts, stars, employer, or project popularity to a model predicting E. Those fields can be available only to explicitly scoped I or cohort-context stages.

## 4. Semi-supervised path

A safe staged approach is:

1. Build a small, independently double-labeled gold set stratified by domain, band, and artifact type.
2. Use deterministic extractors for dates, repository relationships, review state, CI, release linkage, and code statistics.
3. Use language models or heuristics as weak labelers that emit evidence spans, a label, and confidence—not as ground truth.
4. Combine weak labels with a label model or calibrated voting process.
5. Add pseudo-labeled samples only above a validated confidence threshold and keep their origin visible.
6. Send disagreements, novel domains, and high-influence samples to human review through active learning.
7. Train axis-specific models; do not train a single opaque “developer quality” model.
8. Keep final band gates and high-stakes decisions human-reviewable.

Graph propagation is appropriate for adoption and downstream-impact relationships. It is not appropriate for inferring engineering ability from association with famous people or projects.

## 5. Evaluation design

Avoid leakage by splitting evaluation data across time and repository families. A random pull-request split can put nearly identical work from the same person and repository into both train and test sets.

Track at least:

- macro accuracy or ordinal error by rubric dimension;
- calibration error and abstention quality;
- inter-rater agreement and model-to-rater agreement;
- performance by domain, language, artifact type, and visibility level;
- rank stability under missing evidence;
- false positive rates for maintainership, impact, and attribution;
- sensitivity to removal of names and popularity signals.

The target is consistent evidence interpretation, not imitation of every historical assessor bias.

## 6. Data governance

- Store only evidence necessary for the assessment purpose.
- Preserve source links, capture dates, and deletion or correction status.
- Distinguish source observations and their visibility from assessor inference.
- Mark private artifacts and keep them out of public calibration packets,
  shared benchmark datasets, and training exports unless the user separately
  authorizes that use.
- Do not store authentication tokens in evidence records or exports.
- Support subject correction and identity-disambiguation notes.
- Do not infer protected traits or personal characteristics.
- Version schemas, rubric weights, weak labelers, and model outputs.
- Never present a machine suggestion without its evidence trail and confidence.

## 7. Minimal CSV export

When JSON is impractical, use one row per evidence-to-dimension judgment:

```text
assessment_id,evidence_id,subject,snapshot_date,role_lens,axis,dimension,anchor_0_5,weight,attribution_low,attribution_high,confidence,visibility,artifact_ref,url
```

Keep person-level totals in a separate table. This prevents aggregation from erasing the evidence provenance needed for audit and relabeling.
