import React from "react";
import heroPhoto from "../assets/hero-photo.jpg"; // put hero-photo.jpg in src/assets

export default function LandingImageExample() {
  return (
    <section className="panel hero">
      <div className="hero-inner">
        <div className="hero-left">
          <h1>Product headline</h1>
          <p>Short description...</p>
        </div>

        <div className="hero-center">
          <img
            src={heroPhoto}
            alt="Illustration showing product matches and workflow"
            loading="lazy"
            width={420}
            style={{ maxWidth: "100%", height: "auto", borderRadius: 12 }}
          />
        </div>
      </div>
    </section>
  );
}