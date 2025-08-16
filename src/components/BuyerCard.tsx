import React from "react";

type BuyerCardProps = {
  id?: string;
  name: string;
  title?: string;
  avatar?: string; // runtime URL or imported asset path (optional)
  isVerified?: boolean;
  onClick?: () => void;
};

const PLACEHOLDER_AVATAR =
  "data:image/svg+xml;utf8," +
  "<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'>" +
  "<rect width='100%' height='100%' fill='%23e6e6e6'/>" +
  "<text x='50%' y='50%' font-size='48' text-anchor='middle' dominant-baseline='central' fill='%238a8a8a'>?</text>" +
  "</svg>";

const VERIFY_BADGE =
  "data:image/svg+xml;utf8," +
  "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'>" +
  "<circle cx='12' cy='12' r='12' fill='%230a84ff'/>" +
  "<path d='M9.5 13.5l1.8 1.8 4.2-5' stroke='%23fff' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round' fill='none'/>" +
  "</svg>";

const BuyerCard: React.FC<BuyerCardProps> = ({ name, title, avatar, isVerified, onClick }) => {
  const avatarSrc = avatar ?? PLACEHOLDER_AVATAR;

  return (
    <article
      className="buyer-card"
      onClick={onClick}
      style={{
        padding: 12,
        borderRadius: 10,
        background: "#fff",
        boxShadow: "0 6px 18px rgba(12,12,12,0.04)",
        display: "flex",
        alignItems: "center",
        gap: 12,
        cursor: onClick ? "pointer" : "default",
      }}
    >
      <img
        src={avatarSrc}
        alt={`${name} avatar`}
        style={{
          width: 56,
          height: 56,
          objectFit: "cover",
          borderRadius: 8,
          flex: "0 0 56px",
        }}
      />
      <div style={{ flex: "1 1 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <strong style={{ fontSize: 15 }}>{name}</strong>
          {isVerified && <img src={VERIFY_BADGE} alt="Verified" style={{ width: 20, height: 20 }} />}
        </div>
        {title && <div style={{ color: "#666", fontSize: 13 }}>{title}</div>}
      </div>
    </article>
  );
};

export default BuyerCard;