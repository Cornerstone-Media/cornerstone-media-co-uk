import { AbsoluteFill, useCurrentFrame, spring, interpolate, useVideoConfig, Sequence } from "remotion";
import { loadFont } from "@remotion/google-fonts/Montserrat";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";

const { fontFamily: montserrat } = loadFont("normal", { weights: ["700"], subsets: ["latin"] });
const { fontFamily: inter } = loadInter("normal", { weights: ["400"], subsets: ["latin"] });

const services = [
  { title: "PPC", desc: "Google Ads & Paid Search" },
  { title: "SEO", desc: "Search Engine Optimisation" },
  { title: "Social Media", desc: "Facebook · Instagram · LinkedIn" },
  { title: "Web Design", desc: "WordPress · E-commerce" },
  { title: "Content", desc: "Copywriting & Strategy" },
  { title: "Maintenance", desc: "Hosting & Support" },
];

export const Scene2Services: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerProgress = spring({ frame: frame - 5, fps, config: { damping: 20, stiffness: 200 } });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(160deg, #0d0d14 0%, #0a0a0f 100%)",
        padding: "80px 120px",
        zIndex: 1,
      }}
    >
      <div style={{
        fontFamily: montserrat,
        fontSize: 52,
        fontWeight: 700,
        color: "#fff",
        opacity: interpolate(headerProgress, [0, 1], [0, 1]),
        transform: `translateX(${interpolate(headerProgress, [0, 1], [-60, 0])}px)`,
        marginBottom: 10,
      }}>
        Our Services
      </div>
      <div style={{
        width: 80,
        height: 3,
        background: "#d4af37",
        marginBottom: 60,
        opacity: interpolate(headerProgress, [0, 1], [0, 1]),
      }} />

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 30,
      }}>
        {services.map((service, i) => {
          const delay = 20 + i * 12;
          const s = spring({ frame: frame - delay, fps, config: { damping: 18, stiffness: 180 } });
          const cardOpacity = interpolate(s, [0, 1], [0, 1]);
          const cardY = interpolate(s, [0, 1], [60, 0]);

          return (
            <div
              key={i}
              style={{
                background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(255,255,255,0.03) 100%)",
                border: "1px solid rgba(212,175,55,0.15)",
                borderRadius: 16,
                padding: "40px 36px",
                opacity: cardOpacity,
                transform: `translateY(${cardY}px)`,
              }}
            >
              <div style={{
                fontFamily: montserrat,
                fontSize: 36,
                fontWeight: 700,
                color: "#d4af37",
                marginBottom: 12,
              }}>
                {service.title}
              </div>
              <div style={{
                fontFamily: inter,
                fontSize: 20,
                color: "rgba(255,255,255,0.55)",
              }}>
                {service.desc}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
