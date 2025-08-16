import React, { useState } from "react";

// Use only the PNG assets you have in src/assets
import heroIll from "../assets/hero-illustration-2.png";
import featureGraph from "../assets/feature-graph-2.png";
import galleryAvatars from "../assets/gallery-avatars.png";
import expandedProfile from "../assets/expanded-profile-2.png";
import onboardingCard from "../assets/onboarding-card.png";

type LandingProps = {
  onNavigate?: (route: string) => void;
};

// Small inline placeholder avatar (data URL SVG) to avoid relying on files for testimonials
const PLACEHOLDER_AVATAR =
  "data:image/svg+xml;utf8," +
  "<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'>" +
  "<rect width='100%' height='100%' fill='%23e6e6e6'/>" +
  "<text x='50%' y='50%' font-size='48' text-anchor='middle' dominant-baseline='central' fill='%238a8a8a'>?</text>" +
  "</svg>";

// small inline verify badge
const VERIFY_BADGE =
  "data:image/svg+xml;utf8," +
  "<svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 24 24'>" +
  "<circle cx='12' cy='12' r='12' fill='%230a84ff'/>" +
  "<path d='M9.5 13.5l1.8 1.8 4.2-5' stroke='%23fff' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round' fill='none'/>" +
  "</svg>";

const TESTIMONIALS = [
  { id: "t1", name: "Alex R.", quote: "A huge time-saver — love the match scoring.", avatar: undefined },
  { id: "t2", name: "Sara M.", quote: "Onboarding was simple and fast.", avatar: undefined },
  { id: "t3", name: "Priya K.", quote: "Clean UI and useful insights.", avatar: undefined },
];

const Landing: React.FC<LandingProps> = ({ onNavigate }) => {
  // fallback navigate when parent doesn't supply one
  const navigate = onNavigate ?? ((q: string) => console.log("[Landing] navigate:", q));
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);

  function nextTestimonial() {
    setCurrentTestimonial((s) => (s + 1) % TESTIMONIALS.length);
  }

  return (
    <main className="landing-page" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      {/* HERO */}
      <section className="hero" style={{ padding: "3rem 1.5rem", textAlign: "center" }}>
        <div className="hero-copy" style={{ maxWidth: 720, margin: "0 auto 2rem" }}>
          <h1 style={{ fontSize: "2.25rem", margin: "0 0 0.5rem" }}>Find the right buyers faster</h1>
          <p style={{ color: "#666", marginBottom: "1.25rem" }}>
            Match scoring, intuitive pipeline, and fast onboarding to help you close deals more quickly.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
            {/* Changed to "auth" so App will render the Auth page */}
            <button onClick={() => navigate("auth")} className="btn primary" style={{ padding: "0.75rem 1.25rem" }}>
              Get started
            </button>
            <button onClick={() => navigate("auth")} className="btn ghost" style={{ padding: "0.75rem 1.25rem" }}>
              Request demo
            </button>
          </div>
        </div>

        <div className="hero-center" style={{ maxWidth: 1200, margin: "2rem auto 0" }}>
          <img
            src={heroIll}
            alt="Product illustration showing matches and pipeline"
            className="hero-illustration big"
            loading="eager"
            style={{ width: "100%", height: "auto", display: "block", borderRadius: 12 }}
          />
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="features" style={{ padding: "2.25rem 1.5rem", background: "linear-gradient(#fff, #fbf7f3)" }}>
        <div className="container" style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ marginBottom: "1rem" }}>Product highlights</h2>

          <div
            className="features-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 16,
              alignItems: "start",
            }}
          >
            <article className="feature-card" onClick={() => navigate("auth")} style={{ padding: 18, borderRadius: 12, background: "#fff", boxShadow: "0 4px 10px rgba(12,12,12,0.03)" }}>
              <img src={featureGraph} alt="Analytics panel" className="feature-img" style={{ width: "100%", height: 120, objectFit: "contain" }} />
              <h4 style={{ marginTop: 12 }}>Match Scoring</h4>
              <p className="muted">Fit scores and insights.</p>
            </article>

            <article className="feature-card" onClick={() => navigate("seller")} style={{ padding: 18, borderRadius: 12, background: "#fff", boxShadow: "0 4px 10px rgba(12,12,12,0.03)" }}>
              <img src={onboardingCard} alt="Onboarding" className="feature-img" style={{ width: "100%", height: 120, objectFit: "cover" }} />
              <h4 style={{ marginTop: 12 }}>Onboarding</h4>
              <p className="muted">Fast setup with structured profiles.</p>
            </article>

            <article className="feature-card" onClick={() => navigate("pipeline")} style={{ padding: 18, borderRadius: 12, background: "#fff", boxShadow: "0 4px 10px rgba(12,12,12,0.03)" }}>
              <img src={expandedProfile} alt="Profile detail" className="feature-img" style={{ width: "100%", height: 120, objectFit: "cover" }} />
              <h4 style={{ marginTop: 12 }}>Acquisition Workflow</h4>
              <p className="muted">Milestones and helpers.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ONBOARDING / CTA CARD */}
      <section style={{ padding: "2rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flex: "0 0 320px" }}>
            <article className="feature-card" onClick={() => navigate("auth")} style={{ padding: 18, borderRadius: 12, background: "#fff", boxShadow: "0 6px 18px rgba(12,12,12,0.06)" }}>
              <img src={onboardingCard} alt="Onboarding step" className="feature-img" style={{ width: "100%", height: 140, objectFit: "cover", borderRadius: 8 }} />
              <h4 style={{ marginTop: 12 }}>Easy onboarding</h4>
              <p className="muted">Progressive steps to get set up in minutes.</p>
            </article>
          </div>

          <div style={{ flex: "1 1 0", minWidth: 280 }}>
            <h3 style={{ marginTop: 0 }}>See how it works</h3>
            <p style={{ color: "#666" }}>
              Example data and mock profiles help you understand how match scoring and the pipeline come together.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
              <button onClick={() => navigate("auth")} className="btn primary">Start free</button>
              <button onClick={() => navigate("auth")} className="btn ghost">Learn more</button>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY / SCREENSHOTS */}
      <section style={{ padding: "2rem 1.5rem", background: "#faf8f6" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2>Product gallery</h2>
          <div className="gallery-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12, marginTop: 12 }}>
            <div className="screenshot tile" style={{ borderRadius: 8, overflow: "hidden", background: "#fff", boxShadow: "0 6px 20px rgba(12,12,12,0.04)" }}>
              <img src={galleryAvatars} alt="Gallery screenshot (decorative)" loading="lazy" style={{ width: "100%", height: 200, objectFit: "cover" }} />
            </div>

            <div className="screenshot tile" style={{ borderRadius: 8, overflow: "hidden", background: "#fff", boxShadow: "0 6px 20px rgba(12,12,12,0.04)" }}>
              <img src={expandedProfile} alt="Expanded buyer profile (decorative)" loading="lazy" style={{ width: "100%", height: 200, objectFit: "cover" }} />
            </div>
          </div>
          <p style={{ color: "#777", marginTop: 10 }}>Screenshots are decorative — for legible app screenshots use real app exports or regenerate with placeholder text.</p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "2rem 1.5rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ marginBottom: 8 }}>What customers say</h2>

          <div style={{ display: "flex", gap: 12, alignItems: "center", justifyContent: "center", marginTop: 12 }}>
            <button onClick={() => setCurrentTestimonial((s) => (s - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}>&larr;</button>
            <div style={{ width: 520, padding: 18, borderRadius: 8, background: "#fff", boxShadow: "0 6px 18px rgba(12,12,12,0.05)" }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <img src={TESTIMONIALS[currentTestimonial].avatar ?? PLACEHOLDER_AVATAR} alt={TESTIMONIALS[currentTestimonial].name} className="avatar-small" style={{ width: 56, height: 56, borderRadius: 8 }} />
                <div style={{ textAlign: "left" }}>
                  <strong>{TESTIMONIALS[currentTestimonial].name}</strong>
                  <p style={{ margin: "6px 0 0", color: "#444" }}>{TESTIMONIALS[currentTestimonial].quote}</p>
                </div>
                <div style={{ marginLeft: "auto" }}>
                  <img src={VERIFY_BADGE} alt="Verified" style={{ width: 28, height: 28 }} />
                </div>
              </div>
            </div>
            <button onClick={nextTestimonial}>&rarr;</button>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section style={{ padding: "2rem 1.5rem", background: "#fff8f6", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h3>Ready to try it?</h3>
          <p style={{ color: "#666" }}>Start a free trial or request a personalized demo.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 12 }}>
            <button onClick={() => navigate("auth")} className="btn primary">Start free trial</button>
            <button onClick={() => navigate("auth")} className="btn ghost">Request demo</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Landing;