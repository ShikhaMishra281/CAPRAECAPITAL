import React, { useState } from "react";
import BuyerCard from "../components/BuyerCard";
import { mockSellers, Seller } from "../utils/mockData";
import SellerProfileModal from "../components/SellerProfileModal";

export default function DashboardBuyer() {
  const [selectedSeller, setSelectedSeller] = useState<Seller | null>(null);

  return (
    <div style={{ marginTop: 18 }}>
      <div className="container">
        <div className="panel card" style={{ padding: 18 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <h2 style={{ margin: 0 }}>Buyer Dashboard</h2>
              <div className="muted small">Discover acquisition opportunities and request NDAs to access full packages.</div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button className="btn">New search</button>
              <button className="btn ghost">Filters</button>
            </div>
          </div>

          <div style={{ marginTop: 18 }}>
            <h3 style={{ marginBottom: 8 }}>Available sellers</h3>
            <div className="card-grid">
              {mockSellers.map((s) => (
                <div key={s.id} onClick={() => setSelectedSeller(s)} style={{ cursor: "pointer" }}>
                  <BuyerCard name={s.businessName} title={s.shortPitch} avatar={s.logo} isVerified={false} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SellerProfileModal
        open={!!selectedSeller}
        seller={selectedSeller ?? undefined}
        onClose={() => setSelectedSeller(null)}
        onRequestNDA={(id) => {
          // hook for analytics or API: user requested NDA for seller id
          console.log("NDA requested for seller:", id);
        }}
      />
    </div>
  );
}