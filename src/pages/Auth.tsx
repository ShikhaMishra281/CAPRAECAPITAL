import React, { useState } from "react";

type Props = {
  initialType?: string | undefined; // "buyer" | "seller"
  onComplete: (role: string) => void;
};

const Auth: React.FC<Props> = ({ initialType, onComplete }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<string>(initialType ?? "seller");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // mock login delay
    setTimeout(() => {
      setLoading(false);
      // For demo we just treat login as complete: navigate to either seller or buyer dashboard
      onComplete(role);
    }, 700);
  }

  return (
    <main className="container" style={{ marginTop: 30 }}>
      <div style={{ maxWidth: 980, margin: "0 auto", display: "flex", gap: 18, alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
        <section style={{ flex: "1 1 420px" }} className="card">
          <h2 style={{ marginTop: 0 }}>Welcome back</h2>
          <p className="muted small">Sign in to continue to Shikha. Use the role selector to demo buyer vs seller flows.</p>

          <form className="form" onSubmit={handleSubmit} style={{ marginTop: 12 }}>
            <div style={{ display: "flex", gap: 8 }}>
              <button type="button" onClick={() => setRole("seller")} className={`btn small ${role === "seller" ? "" : "secondary"}`} aria-pressed={role === "seller"}>
                Seller
              </button>
              <button type="button" onClick={() => setRole("buyer")} className={`btn small ${role === "buyer" ? "" : "secondary"}`} aria-pressed={role === "buyer"}>
                Buyer
              </button>
            </div>

            <input className="input" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="input" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
              <button className="btn" type="submit" disabled={loading}>{loading ? "Signing in..." : "Sign in"}</button>
              <button type="button" className="btn ghost" onClick={() => { setEmail("demo@example.com"); setPassword("password"); }}>
                Demo creds
              </button>
            </div>
          </form>

          <p className="muted small" style={{ marginTop: 12 }}>
            This is a mock login for demo purposes — signing in navigates to the selected role's dashboard.
          </p>
        </section>

        <aside style={{ flex: "0 0 420px" }}>
          <div className="card" style={{ textAlign: "center" }}>
            <h3 style={{ marginTop: 0 }}>Quick tour</h3>
            <p className="muted">Profiles, match scoring, and a visual pipeline — everything in one place. Try both roles to see the differences.</p>
            <div style={{ marginTop: 12 }}>
              <button className="btn" onClick={() => onComplete(role)} style={{ marginRight: 8 }}>Continue as {role}</button>
              <button className="btn ghost" onClick={() => alert("Request demo (mock)")}>Request demo</button>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Auth;