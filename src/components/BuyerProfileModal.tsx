import React from "react";

export type Buyer = {
  id?: string;
  name?: string;
  avatar?: string;
  headline?: string;
  isVerified?: boolean;
  about?: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  buyer?: Buyer;
  onAccept?: (id: string) => void;
};

// Placeholder avatar and badge as inline SVG/data URL so we don't depend on external assets
const PLACEHOLDER_AVATAR =
  "data:image/svg+xml;utf8," +
  "<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'>" +
  "<rect width='100%' height='100%' fill='%23e6e6e6'/>" +
  "<text x='50%' y='50%' font-size='48' text-anchor='middle' dominant-baseline='central' fill='%238a8a8a'>?</text>" +
  "</svg>";

const VERIFY_BADGE =
  "data:image/svg+xml;utf8," +
  "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>" +
  "<circle cx='12' cy='12' r='12' fill='%230a84ff'/>" +
  "<path d='M9.5 13.5l1.8 1.8 4.2-5' stroke='%23fff' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round' fill='none'/>" +
  "</svg>";

const BuyerProfileModal: React.FC<Props> = ({ open, onClose, buyer, onAccept }) => {
  if (!open || !buyer) return null;

  const avatarSrc = buyer.avatar ?? PLACEHOLDER_AVATAR;

  function handleAccept() {
    if (!buyer?.id) return;
    if (onAccept) onAccept(buyer.id);
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
        background: "rgba(0,0,0,0.4)",
        zIndex: 1000,
        padding: 20,
      }}
    >
      <div style={{ width: 760, maxWidth: "100%", borderRadius: 12, background: "#fff", padding: 18 }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <img
            src={avatarSrc}
            alt={`${buyer.name ?? "Buyer"} avatar`}
            style={{ width: 84, height: 84, borderRadius: 10, objectFit: "cover" }}
          />
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <h3 style={{ margin: 0 }}>{buyer.name}</h3>
              {buyer.isVerified && <img src={VERIFY_BADGE} alt="Verified" style={{ width: 24, height: 24 }} />}
            </div>
            {buyer.headline && <p style={{ margin: "6px 0 0", color: "#666" }}>{buyer.headline}</p>}
          </div>

          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={handleAccept}
              style={{
                padding: "8px 12px",
                background: "#0a84ff",
                color: "#fff",
                borderRadius: 6,
                border: "none",
                cursor: "pointer",
              }}
            >
              Accept
            </button>
            <button
              onClick={onClose}
              style={{
                padding: "8px 12px",
                background: "#f2f2f2",
                borderRadius: 6,
                border: "none",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>

        {buyer.about && (
          <section style={{ marginTop: 12 }}>
            <p style={{ color: "#444" }}>{buyer.about}</p>
          </section>
        )}
      </div>
    </div>
  );
};

export default BuyerProfileModal;