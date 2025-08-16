import React, { useState } from "react";

const steps = [
  { id: 1, title: "Company details" },
  { id: 2, title: "Financials" },
  { id: 3, title: "Team & roadmap" },
  { id: 4, title: "Review & publish" },
];

const OnboardingFlow: React.FC = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="card" style={{ padding: 18 }}>
      <h3 style={{ marginTop: 0 }}>Onboarding</h3>
      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        {steps.map((s) => (
          <div key={s.id} style={{ flex: 1 }}>
            <div style={{ fontSize: 13, color: s.id <= step ? "var(--accent-600)" : "var(--muted)", fontWeight: 700 }}>
              {s.title}
            </div>
            <div style={{ height: 6, background: s.id <= step ? "var(--accent)" : "#eee", borderRadius: 6, marginTop: 6 }} />
          </div>
        ))}
      </div>

      <div className="muted small">Step {step} of {steps.length}</div>
      <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
        <button className="btn" onClick={() => setStep((s) => Math.max(1, s - 1))}>Back</button>
        <button className="btn" onClick={() => setStep((s) => Math.min(steps.length, s + 1))}>Next</button>
      </div>
    </div>
  );
};

export default OnboardingFlow;