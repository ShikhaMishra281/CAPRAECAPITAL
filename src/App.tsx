import React, { useState } from "react";
import TopNav from "./components/TopNav";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import DashboardSeller from "./pages/DashboardSeller";
import DashboardBuyer from "./pages/DashboardBuyer";
import Pipeline from "./components/Pipeline";

export default function App() {
  // simple route state: landing | auth | seller | buyer | pipeline
  const [route, setRoute] = useState<string>("landing");
  const [authRole, setAuthRole] = useState<string | undefined>(undefined);

  function handleNavigate(q: string) {
    // support "auth?buyer" or "auth?seller"
    if (q.startsWith("auth")) {
      const parts = q.split("?");
      setAuthRole(parts[1] || undefined);
      setRoute("auth");
      return;
    }
    setRoute(q);
  }

  return (
    <div className="page">
      <TopNav route={route} setRoute={handleNavigate} />

      <div style={{ marginTop: 18 }}>
        {route === "landing" && <Landing onNavigate={handleNavigate} />}
        {route === "auth" && <Auth initialType={authRole} onComplete={(role) => { setRoute(role === "buyer" ? "buyer" : "seller"); }} />}
        {route === "seller" && <DashboardSeller onNavigate={handleNavigate} />}
        {route === "buyer" && <DashboardBuyer />}
        {route === "pipeline" && <Pipeline />}
      </div>
    </div>
  );
}