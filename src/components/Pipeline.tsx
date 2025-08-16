import React from "react";
import gallery from "../assets/gallery-avatars.png";

const Pipeline: React.FC = () => {
  const columns = [
    { id: "match", title: "Matches", items: ["Acme Growth Fund", "Sierra Ventures"] },
    { id: "contact", title: "Contacted", items: ["Harbor Capital"] },
    { id: "neg", title: "Negotiation", items: [] },
    { id: "won", title: "Won", items: [] },
  ];

  return (
    <div style={{ marginTop: 18 }}>
      <div className="container">
        <div className="card" style={{ padding: 18 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h2 style={{ margin: 0 }}>Pipeline</h2>
            <div className="muted small">Visualize your active deals</div>
          </div>

          <div style={{ marginTop: 12, display: "flex", gap: 12 }}>
            <img src={gallery} alt="pipeline visual" style={{ width: 220, height: 140, objectFit: "cover", borderRadius: 10, boxShadow: "var(--shadow-xs)" }} />
            <div style={{ flex: 1 }}>
              <div className="pipeline" style={{ marginTop: 6 }}>
                {columns.map((c) => (
                  <div key={c.id} className="pipeline-column">
                    <h4 style={{ marginTop: 0, marginBottom: 8 }}>{c.title}</h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {c.items.length === 0 && <div className="muted small">No items</div>}
                      {c.items.map((it) => (
                        <div key={it} className="card" style={{ padding: 10 }}>
                          <strong>{it}</strong>
                          <div className="muted small">Matched 8 days ago</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pipeline;