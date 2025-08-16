import React from "react";

type Props = {
  route: string;
  setRoute: (r: string) => void;
};

const TopNav: React.FC<Props> = ({ route, setRoute }) => {
  return (
    <header className="topnav container">
      <div className="brand" style={{ alignItems: "center" }}>
        <div className="logo">SH</div>
        <div>
          <div style={{ fontWeight: 700 }}>Shikha</div>
          <div className="muted small">Acquisition marketplace</div>
        </div>
      </div>

      <nav className="actions" aria-label="Main navigation">
        <button className={`btn small ${route === "landing" ? "" : "ghost"}`} onClick={() => setRoute("landing")}>Home</button>
        <button className={`btn small ${route === "seller" ? "" : "ghost"}`} onClick={() => setRoute("seller")}>Seller</button>
        <button className={`btn small ${route === "buyer" ? "" : "ghost"}`} onClick={() => setRoute("buyer")}>Buyer</button>
        <button className={`btn small ${route === "pipeline" ? "" : "ghost"}`} onClick={() => setRoute("pipeline")}>Pipeline</button>
        <div style={{ width: 12 }} />
        <button className="btn small" onClick={() => setRoute("auth")}>Sign in</button>
      </nav>
    </header>
  );
};

export default TopNav;