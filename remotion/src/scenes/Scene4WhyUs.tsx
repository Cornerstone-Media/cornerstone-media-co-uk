import { AbsoluteFill, useCurrentFrame, spring, interpolate, useVideoConfig } from "remotion";
import { loadFont } from "@remotion/google-fonts/Montserrat";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";

const { fontFamily: montserrat } = loadFont("normal", { weights: ["700"], subsets: ["latin"] });
const { fontFamily: inter } = loadInter("normal", { weights: ["400"], subsets: ["latin"] });

const points = [
  "Data-Driven Strategy",
  "Transparent Reporting",
  "No Long Contracts",
  "Birmingham-Based Experts",
];

export const Scene4WhyUs: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerP = spring({ frame: frame - 5, fps, config: { damping: 20 } });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(160deg, #0a0a0f 0%, #12121c 100%)",
        display: "flex",
        zIndex: 1,
      }}
    >
      {/* Left side */}
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 100px",
      }}>
        <div style={{
          fontFamily: montserrat,
          fontSize: 56,
          fontWeight: 700,
          color: "#fff",
          lineHeight: 1.15,
          opacity: interpolate(headerP, [0, 1], [0, 1]),
          transform: `translateY(${interpolate(headerP, [0, 1], [40, 0])}px)`,
        }}>
          Why Choose{" "}
          <span style={{
            background: "linear-gradient(90deg, #d4af37, #f0d060)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Cornerstone?
          </span>
        </div>
      </div>

      {/* Right side - points */}
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 80px",
        gap: 36,
      }}>
        {points.map((point, i) => {
          const delay = 15 + i * 14;
          const s = spring({ frame: frame - delay, fps, config: { damping: 18, stiffness: 200 } });
          return (
            <div key={i} style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
              opacity: interpolate(s, [0, 1], [0, 1]),
              transform: `translateX(${interpolate(s, [0, 1], [80, 0])}px)`,
            }}>
              <div style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#d4af37",
                flexShrink: 0,
              }} />
              <div style={{
                fontFamily: inter,
                fontSize: 30,
                color: "rgba(255,255,255,0.85)",
                fontWeight: 400,
              }}>
                {point}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
