"use client";

import { useState, useEffect, useCallback, useRef } from "react";

/* ─── Type Definitions ─── */

type DimensionKey = "E" | "S" | "I" | "T" | "R" | "C";

interface Dimension {
  key: DimensionKey;
  name: string;
  subtitle: string;
  description: string;
  details: string[];
  color: string;
}

/* ─── Data ─── */

const DIMENSIONS: Dimension[] = [
  {
    key: "E",
    name: "Engineering Capability",
    subtitle: "工程能力",
    description: "Implementation, architecture, debugging, reliability & complex constraint handling.",
    details: [
      "Code quality & structural design across repositories",
      "Debugging proficiency and root-cause analysis",
      "System reliability & edge-case management",
      "Performance optimization under real-world constraints",
    ],
    color: "#3b82f6",
  },
  {
    key: "S",
    name: "Stewardship & Ownership",
    subtitle: "技术治理",
    description: "Delivery, maintenance, review, release, governance & contributor collaboration.",
    details: [
      "Long-term maintenance consistency & dependency management",
      "Code review depth and constructive mentorship",
      "Release engineering and changelog discipline",
      "Governance participation and community stewardship",
    ],
    color: "#22c55e",
  },
  {
    key: "I",
    name: "Ecosystem Impact",
    subtitle: "生态影响",
    description: "Attributed adoption, authority, downstream influence & knowledge propagation.",
    details: [
      "Downstream dependents and attributed usage",
      "Technical authority signals — RFCs, design documents",
      "Knowledge dissemination via issues, discussions, blogs",
      "Cross-project influence and standards contribution",
    ],
    color: "#f59e0b",
  },
  {
    key: "T",
    name: "Development Trajectory",
    subtitle: "成长轨迹",
    description: "Recent technical difficulty, execution completeness & responsibility scope growth.",
    details: [
      "Increasing complexity in recent contributions",
      "Breadth of execution — from idea to release",
      "Growing scope of ownership over time",
      "Accelerating autonomy and decision-making authority",
    ],
    color: "#8b5cf6",
  },
  {
    key: "R",
    name: "Technology Scarcity",
    subtitle: "技术稀缺度",
    description: "Optional. Scarcity relative to a population and time snapshot.",
    details: [
      "Rare expertise in specific domains or toolchains",
      "Time-windowed supply/demand ratio within ecosystem",
      "Context-dependent — always evaluated relative to a cohort",
      "Optional modifier, not a core ranking factor",
    ],
    color: "#ec4899",
  },
  {
    key: "C",
    name: "Confidence",
    subtitle: "置信度",
    description: "Evidence coverage, identity verification, attribution stability & sampling reliability.",
    details: [
      "Proportion of claims backed by verifiable artifacts",
      "Identity consistency across platforms and time",
      "Contribution attribution clarity (solo vs. team vs. AI)",
      "Statistical stability of the evidence sample",
    ],
    color: "#06b6d4",
  },
];

const PHILOSOPHY_ITEMS = [
  {
    label: "Engineering ≠ Popularity",
    desc: "Stars, followers, and commit counts are not measures of capability.",
  },
  {
    label: "Individual ≠ Project",
    desc: "Separates personal contribution from collective project success.",
  },
  {
    label: "Evidence-First",
    desc: "Every conclusion traces to a commit, PR, issue, review, release, or governance artifact.",
  },
  {
    label: "Absence ≠ Absence of Skill",
    desc: "Missing or unselected evidence is not evidence of missing ability.",
  },
  {
    label: "AI Attribution",
    desc: "AI-assisted work is attributed separately across implementation, decision, verification, and responsibility.",
  },
];

/* ─── Sub-components ─── */

function ThemeToggle({ dark, onToggle }: { dark: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="fixed top-6 right-6 z-50 flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2"
      style={{
        borderColor: "var(--color-border)",
        backgroundColor: "var(--color-bg-muted)",
        color: "var(--color-fg-muted)",
      }}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

function GitHubLink() {
  return (
    <a
      href="https://github.com/Minsecrus/github-developer-assessor"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-6 right-20 z-50 flex h-9 items-center gap-1.5 rounded-full border px-3 text-xs font-medium transition-all duration-300 hover:scale-105"
      style={{
        borderColor: "var(--color-border)",
        backgroundColor: "var(--color-bg-muted)",
        color: "var(--color-fg-muted)",
      }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
      GitHub
    </a>
  );
}

function DetailPanel({
  dimension,
  onClose,
}: {
  dimension: Dimension;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    panelRef.current?.focus();
  }, []);

  return (
    <div
      className="fixed inset-0 z-40 flex items-end justify-center sm:items-center"
      style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Details for ${dimension.key} — ${dimension.name}`}
    >
      <div
        ref={panelRef}
        tabIndex={-1}
        className="animate-reveal w-full max-w-lg rounded-t-2xl border px-6 pb-8 pt-6 shadow-2xl sm:rounded-2xl sm:px-8"
        style={{
          backgroundColor: "var(--color-bg)",
          borderColor: "var(--color-border)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span
              className="flex h-10 w-10 items-center justify-center rounded-lg text-lg font-bold"
              style={{
                backgroundColor: `${dimension.color}18`,
                color: dimension.color,
              }}
            >
              {dimension.key}
            </span>
            <div>
              <h2 className="text-sm font-semibold">{dimension.name}</h2>
              <p style={{ color: "var(--color-fg-muted)" }} className="text-xs">
                {dimension.subtitle}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-sm transition-colors hover:opacity-70"
            style={{ color: "var(--color-fg-muted)" }}
            aria-label="Close"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <p className="mb-4 text-sm leading-relaxed" style={{ color: "var(--color-fg-muted)" }}>
          {dimension.description}
        </p>
        <ul className="space-y-2">
          {dimension.details.map((detail, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm"
              style={{ color: "var(--color-fg)" }}
            >
              <span
                className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: dimension.color }}
              />
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function PhilosophyModal({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <div
      className="fixed inset-0 z-40 flex items-end justify-center sm:items-center"
      style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Core principles"
    >
      <div
        ref={ref}
        tabIndex={-1}
        className="animate-reveal w-full max-w-lg rounded-t-2xl border px-6 pb-8 pt-6 shadow-2xl sm:rounded-2xl sm:px-8"
        style={{
          backgroundColor: "var(--color-bg)",
          borderColor: "var(--color-border)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-sm font-semibold">Core Principles</h2>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-sm transition-colors hover:opacity-70"
            style={{ color: "var(--color-fg-muted)" }}
            aria-label="Close"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <ul className="space-y-4">
          {PHILOSOPHY_ITEMS.map((item, i) => (
            <li
              key={i}
              className="animate-reveal border-l-2 pl-4"
              style={{
                borderColor: "var(--color-accent)",
                animationDelay: `${i * 0.08}s`,
              }}
            >
              <span className="text-sm font-medium">{item.label}</span>
              <p className="mt-0.5 text-xs leading-relaxed" style={{ color: "var(--color-fg-muted)" }}>
                {item.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function InstructionsModal({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <div
      className="fixed inset-0 z-40 flex items-end justify-center sm:items-center"
      style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Getting started"
    >
      <div
        ref={ref}
        tabIndex={-1}
        className="animate-reveal w-full max-w-lg rounded-t-2xl border px-6 pb-8 pt-6 shadow-2xl sm:rounded-2xl sm:px-8"
        style={{
          backgroundColor: "var(--color-bg)",
          borderColor: "var(--color-border)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-sm font-semibold">Getting Started</h2>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-sm transition-colors hover:opacity-70"
            style={{ color: "var(--color-fg-muted)" }}
            aria-label="Close"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="space-y-4 text-sm leading-relaxed" style={{ color: "var(--color-fg-muted)" }}>
          <p>
            <strong style={{ color: "var(--color-fg)" }}>GitHub Developer Assessor</strong> is an
            evidence-first, role-aware Agent Skill. It analyzes GitHub artifacts within the stated
            evidence boundary to assess a developer's demonstrated engineering capability,
            stewardship, ecosystem impact, growth trajectory, and more.
          </p>
          <p>To use the Skill:</p>
          <ol className="ml-4 list-decimal space-y-2">
            <li>
              <strong style={{ color: "var(--color-fg)" }}>Install the Skill</strong> — Add the
              GitHub Developer Assessor Skill to your agent or workflow.
            </li>
            <li>
              <strong style={{ color: "var(--color-fg)" }}>Provide a target</strong> — Supply a
              GitHub username, an organization, or repository URLs. Optionally provide a token,
              then select private repositories to include.
            </li>
            <li>
              <strong style={{ color: "var(--color-fg)" }}>Review the report</strong> — Get a
              structured, evidence-linked ESITRC assessment with traceable references.
            </li>
          </ol>
          <div
            className="mt-4 rounded-xl border p-4 text-xs"
            style={{
              borderColor: "var(--color-border)",
              backgroundColor: "var(--color-bg-muted)",
            }}
          >
            <p className="mb-1 font-semibold" style={{ color: "var(--color-fg)" }}>
              ⚠ Privacy & Limitations
            </p>
            <p>
              Public GitHub data is used by default. Private repositories are inspected only when the
              user provides a token and selects them. Results are as reliable as the evidence sample —
              sparse profiles yield lower confidence scores. AI-assisted contributions are attributed
              separately. This tool does not replace human judgment in hiring or promotion decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main App ─── */

export default function App() {
  const [dark, setDark] = useState(true);
  const [selectedDim, setSelectedDim] = useState<Dimension | null>(null);
  const [showPhilosophy, setShowPhilosophy] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [mounted, setMounted] = useState(false);

  /* Load theme from localStorage on mount */
  useEffect(() => {
    const saved = localStorage.getItem("gda-theme");
    if (saved) setDark(saved === "dark");
    setMounted(true);
  }, []);

  /* Apply theme */
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("gda-theme", dark ? "dark" : "light");
  }, [dark, mounted]);

  const toggleTheme = useCallback(() => setDark((d) => !d), []);

  /* Keyboard shortcuts */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "t" && !e.metaKey && !e.ctrlKey) toggleTheme();
      if (e.key === "?" && !selectedDim && !showPhilosophy && !showInstructions) {
        setShowInstructions(true);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [toggleTheme, selectedDim, showPhilosophy, showInstructions]);

  if (!mounted) return null;

  return (
    <div
      className="relative flex h-screen w-screen flex-col"
      style={{ backgroundColor: "var(--color-bg)", color: "var(--color-fg)" }}
    >
      {/* Fixed top nav */}
      <ThemeToggle dark={dark} onToggle={toggleTheme} />
      <GitHubLink />

      {/* ─── MAIN CONTENT — single viewport ─── */}
      <main className="flex h-full w-full flex-col items-center justify-center px-6">
        {/* ESITRC — the hero */}
        <div className="animate-reveal relative mb-1 select-none text-[min(18vw,12rem)] font-black leading-[0.85] tracking-tight">
          {/* Glow behind text */}
          <div
            className="pointer-events-none absolute inset-0 -translate-y-[10%] scale-150 blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse at center, var(--color-accent) 0%, transparent 70%)",
              opacity: 0.08,
            }}
            aria-hidden="true"
          />
          <h1 style={{ fontFamily: "var(--font-mono)" }}>
            <span className="gradient-text">ESITRC</span>
          </h1>
        </div>

        {/* Subtitle */}
        <p
          className="animate-reveal stagger-1 mb-8 text-center text-xs font-medium uppercase tracking-[0.3em]"
          style={{ color: "var(--color-fg-muted)" }}
        >
          GitHub Developer Assessor
        </p>

        {/* Dimension grid — 6 letters in two rows of 3 */}
        <div
          className="animate-reveal stagger-2 grid w-full max-w-[28rem] grid-cols-3 gap-2 sm:gap-3"
          role="list"
          aria-label="Assessment dimensions"
        >
          {DIMENSIONS.map((dim) => (
            <button
              key={dim.key}
              role="listitem"
              onClick={() => setSelectedDim(dim)}
              className="group flex flex-col items-center gap-1 rounded-xl border px-2 py-3 text-center transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] focus-visible:outline-2"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-bg-muted)",
              }}
              aria-label={`${dim.key}: ${dim.name}. Click for details.`}
            >
              <span
                className="text-lg font-bold transition-colors duration-200"
                style={{ color: dim.color }}
              >
                {dim.key}
              </span>
              <span
                className="text-[10px] leading-tight transition-colors duration-200"
                style={{ color: "var(--color-fg-muted)" }}
              >
                {dim.name.split(" ")[0]}
              </span>
            </button>
          ))}
        </div>

        {/* Action row */}
        <div className="animate-reveal stagger-4 mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setShowInstructions(true)}
            className="flex items-center gap-1.5 rounded-full px-5 py-2 text-xs font-medium transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              backgroundColor: "var(--color-accent)",
              color: dark ? "#0f1117" : "#ffffff",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            Get Started
          </button>
          <button
            onClick={() => setShowPhilosophy(true)}
            className="flex items-center gap-1.5 rounded-full border px-5 py-2 text-xs font-medium transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              borderColor: "var(--color-border)",
              color: "var(--color-fg-muted)",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            Principles
          </button>
        </div>
      </main>

      {/* ─── Bottom bar ─── */}
      <footer
        className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t px-4 py-3 text-[10px] sm:px-6"
        style={{
          borderColor: "var(--color-border)",
          color: "var(--color-fg-muted)",
        }}
      >
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
            <span
              className="relative inline-flex h-2 w-2 rounded-full"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
          </span>
          <span>MIT License · © 2026 Minsecrus</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <span>
            <kbd
              className="rounded border px-1.5 py-0.5 text-[9px]"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-bg-muted)",
              }}
            >
              T
            </kbd>{" "}
            theme
          </span>
          <span>
            <kbd
              className="rounded border px-1.5 py-0.5 text-[9px]"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-bg-muted)",
              }}
            >
              ?
            </kbd>{" "}
            help
          </span>
        </div>
      </footer>

      {/* ─── Modals ─── */}
      {selectedDim && (
        <DetailPanel dimension={selectedDim} onClose={() => setSelectedDim(null)} />
      )}
      {showPhilosophy && <PhilosophyModal onClose={() => setShowPhilosophy(false)} />}
      {showInstructions && <InstructionsModal onClose={() => setShowInstructions(false)} />}
    </div>
  );
}
