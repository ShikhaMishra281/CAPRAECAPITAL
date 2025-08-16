import React, { useState } from "react";
import { mockBuyers } from "../utils/mockData";
import type { Buyer as BuyerType } from "../components/BuyerProfileModal";
import BuyerProfileModal from "../components/BuyerProfileModal";
import BuyerCard from "../components/BuyerCard";

export default function DashboardSeller({ onNavigate }: { onNavigate: (r: string) => void }) {
  const [selected, setSelected] = useState<BuyerType | null>(null);
  const [accepted, setAccepted] = useState<string[]>([]);

  function acceptBuyer(id: string) {
    setAccepted((s) => (s.includes(id) ? s : [...s, id]));
    // mock opening pipeline
    onNavigate("pipeline");
  }

  return (
    <div>
      <div className="panel">
        <div className="dash-header">
          <h2>Seller Dashboard</h2>
          <div className="stats">
            <div className="stat">Matches <strong>{mockBuyers.length}</strong></div>
            <div className="stat">Accepted <strong>{accepted.length}</strong></div>
          </div>
        </div>

        <div>
          <h3>Potential Buyers</h3>
          <div className="card-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 }}>
            {mockBuyers.map((b) => (
              <div key={b.id} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div onClick={() => setSelected(b)} style={{ cursor: "pointer" }}>
                  <BuyerCard name={b.name} title={b.headline} avatar={b.avatar} isVerified={b.isVerified} />
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <button
                    className="btn primary"
                    onClick={() => acceptBuyer(b.id)}
                  >
                    Accept
                  </button>
                  <button
                    className="btn"
                    onClick={() => alert("Request clarification (mock)")}
                  >
                    Clarify
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BuyerProfileModal
        open={!!selected}
        buyer={selected ?? undefined}
        onClose={() => setSelected(null)}
        onAccept={acceptBuyer}
      />
    </div>
  );
}