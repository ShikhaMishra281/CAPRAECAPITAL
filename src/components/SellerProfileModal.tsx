import React, { useState } from "react";

// Inline placeholder avatar/badge so modal doesn't require extra assets
const PLACEHOLDER_AVATAR =
  "data:image/svg+xml;utf8," +
  "<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'>" +
  "<rect width='100%' height='100%' fill='%23e6e6e6'/>" +
  "<text x='50%' y='50%' font-size='48' text-anchor='middle' dominant-baseline='central' fill='%238a8a8a'>S</text>" +
  "</svg>";

const VERIFY_BADGE =
  "data:image/svg+xml;utf8," +
  "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'>" +
  "<circle cx='12' cy='12' r='12' fill='%230a84ff'/>" +
  "<path d='M9.5 13.5l1.8 1.8 4.2-5' stroke='%23fff' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round' fill='none'/>" +
  "</svg>";

export type Seller = {
  id: string;
  businessName: string;
  industry: string;
  location: string;
  yearsInOperation?: number;
  businessModel?: string;
  shortPitch?: string;
  keyHighlights?: string[];
  revenueRange?: string;
  profitabilityStatus?: string;
  growthTrend?: "positive" | "stable" | "declining";
  employeesCount?: number;
  keyAssets?: string[];
  customerBaseType?: string;
  askingPrice?: string;
  dealType?: string;
  reasonForSelling?: string;
  logo?: string;
  images?: string[];
  financials?: {
    revenue?: string;
    ebitda?: string;
    notes?: string;
  };
  customerListSummary?: string;
  operationalNotes?: string;
  legalDocsSummary?: string;
};

type Props = {
  open: boolean;
  seller?: Seller;
  onClose: () => void;
  onRequestNDA?: (sellerId: string) => void;
};

const lockStyle: React.CSSProperties = {
  padding: 12,
  borderRadius: 8,
  background: "#f8f8f8",
  border: "1px dashed #e6e6e6",
  color: "#555",
};

const SellerProfileModal: React.FC<Props> = ({ open, seller, onClose, onRequestNDA }) => {
  const [ndaSigned, setNdaSigned] = useState<boolean>(false);

  if (!open || !seller) return null;

  // Narrow seller to a local non-optional variable so TypeScript knows it's defined everywhere below
  const s = seller;

  const logoSrc = s.logo ?? PLACEHOLDER_AVATAR;

  function handleRequestNDA() {
    // Simulate NDA flow: in a real app you'd launch an NDA signer / workflow here
    setNdaSigned(true);
    if (onRequestNDA) onRequestNDA(s.id);
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.45)",
        zIndex: 1100,
        padding: 20,
      }}
    >
      <div style={{ width: 820, maxWidth: "100%", borderRadius: 12, background: "#fff", padding: 18 }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <img src={logoSrc} alt={`${s.businessName} logo`} style={{ width: 88, height: 88, borderRadius: 10, objectFit: "cover" }} />
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <h2 style={{ margin: 0 }}>{s.businessName}</h2>
              <div className="muted small">{s.industry} • {s.location}</div>
            </div>
            {s.shortPitch && <p style={{ marginTop: 8, color: "#444" }}>{s.shortPitch}</p>}
            <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
              <button className="btn" onClick={() => alert("Contact request (mock)")}>Contact seller</button>
              <button className="btn ghost" onClick={() => alert("Express interest (mock)")}>Express interest</button>
              <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
                <button className="btn secondary" onClick={onClose}>Close</button>
                <button className="btn" onClick={handleRequestNDA}>{ndaSigned ? "NDA signed" : "Request NDA / Sign"}</button>
              </div>
            </div>
          </div>
        </div>

        {/* 1. High-Level Business Overview */}
        <section style={{ marginTop: 18 }}>
          <h4 style={{ marginBottom: 8 }}>High-level overview</h4>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
            <div className="card" style={{ padding: 12 }}>
              <div className="muted small">Business</div>
              <strong>{s.businessName}</strong>
              <div className="muted small" style={{ marginTop: 6 }}>{s.industry}</div>
            </div>

            <div className="card" style={{ padding: 12 }}>
              <div className="muted small">Location</div>
              <div>{s.location}</div>
              <div className="muted small" style={{ marginTop: 6 }}>Years: {s.yearsInOperation ?? "—"}</div>
            </div>

            <div className="card" style={{ padding: 12 }}>
              <div className="muted small">Model</div>
              <div>{s.businessModel ?? "—"}</div>
              <div className="muted small" style={{ marginTop: 6 }}>{s.keyHighlights?.slice(0,2).join(" • ") ?? ""}</div>
            </div>
          </div>
        </section>

        {/* 2. Performance Snapshot */}
        <section style={{ marginTop: 14 }}>
          <h4 style={{ marginBottom: 8 }}>Performance snapshot</h4>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <div className="card" style={{ padding: 12, minWidth: 220 }}>
              <div className="muted small">Revenue range</div>
              <strong>{s.revenueRange ?? "—"}</strong>
              <div className="muted small" style={{ marginTop: 6 }}>Profitability: {s.profitabilityStatus ?? "—"}</div>
            </div>

            <div className="card" style={{ padding: 12, minWidth: 220 }}>
              <div className="muted small">Growth trend</div>
              <div style={{ textTransform: "capitalize" }}>{s.growthTrend ?? "—"}</div>
              <div style={{ marginTop: 8 }}>
                {/* small visual trend indicator */}
                <div style={{ height: 44, background: "#fff", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", color: "#999" }}>
                  {s.growthTrend === "positive" ? "↑ Positive" : s.growthTrend === "stable" ? "→ Stable" : s.growthTrend === "declining" ? "↓ Declining" : "—"}
                </div>
                <div className="muted small" style={{ marginTop: 6 }}>Exact charts available post-NDA</div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Assets & Capabilities */}
        <section style={{ marginTop: 14 }}>
          <h4 style={{ marginBottom: 8 }}>Assets & capabilities</h4>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
            <div className="card" style={{ padding: 12 }}>
              <div className="muted small">Employees</div>
              <strong>{s.employeesCount ?? "—"}</strong>
              <div className="muted small" style={{ marginTop: 6 }}>Customer base: {s.customerBaseType ?? "—"}</div>
            </div>
            <div className="card" style={{ padding: 12 }}>
              <div className="muted small">Key assets</div>
              {s.keyAssets && s.keyAssets.length > 0 ? (
                <ul style={{ margin: "8px 0 0 18px" }}>
                  {s.keyAssets.map((a) => <li key={a}>{a}</li>)}
                </ul>
              ) : <div>—</div>}
            </div>
          </div>
        </section>

        {/* 4. Asking Terms */}
        <section style={{ marginTop: 14 }}>
          <h4 style={{ marginBottom: 8 }}>Asking terms</h4>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <div className="card" style={{ padding: 12, minWidth: 220 }}>
              <div className="muted small">Asking price</div>
              <strong>{s.askingPrice ?? "Price on request"}</strong>
              <div className="muted small" style={{ marginTop: 6 }}>Deal type: {s.dealType ?? "—"}</div>
            </div>
            <div className="card" style={{ padding: 12, minWidth: 220 }}>
              <div className="muted small">Reason for selling</div>
              <div>{s.reasonForSelling ?? "—"}</div>
            </div>
          </div>
        </section>

        {/* 5. Visual Identity */}
        <section style={{ marginTop: 14 }}>
          <h4 style={{ marginBottom: 8 }}>Visual identity</h4>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <div style={{ width: 120, height: 80, borderRadius: 8, overflow: "hidden", background: "#fff", boxShadow: "var(--shadow-xs)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={logoSrc} alt="logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="muted small">Brand colors and product images available — nothing revealing before NDA.</div>
          </div>
        </section>

        {/* 6. Post-NDA Detailed Package */}
        <section style={{ marginTop: 14 }}>
          <h4 style={{ marginBottom: 8 }}>Post‑NDA package</h4>

          {!ndaSigned ? (
            <div style={lockStyle}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ fontWeight: 700 }}>Locked</div>
                <div className="muted small">Full financials, customer lists, and legal documents become available once an NDA is signed.</div>
                <div style={{ marginLeft: "auto" }}>
                  <button className="btn" onClick={handleRequestNDA}>Request NDA / Sign</button>
                </div>
              </div>
            </div>
          ) : (
            <div style={{ display: "grid", gap: 12 }}>
              <div className="card" style={{ padding: 12 }}>
                <div className="muted small">Financial statements (summary)</div>
                <div><strong>{s.financials?.revenue ?? "—"}</strong> • EBITDA: {s.financials?.ebitda ?? "—"}</div>
                {s.financials?.notes && <div className="muted small" style={{ marginTop: 6 }}>{s.financials.notes}</div>}
              </div>
              <div className="card" style={{ padding: 12 }}>
                <div className="muted small">Customer list summary</div>
                <div>{s.customerListSummary ?? "—"}</div>
              </div>
              <div className="card" style={{ padding: 12 }}>
                <div className="muted small">Operational notes</div>
                <div>{s.operationalNotes ?? "—"}</div>
              </div>
              <div className="card" style={{ padding: 12 }}>
                <div className="muted small">Legal documents</div>
                <div>{s.legalDocsSummary ?? "—"}</div>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default SellerProfileModal;