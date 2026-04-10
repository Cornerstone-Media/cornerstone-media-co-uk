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
        background: "linear-gradient(160deg, #060911 0%, #0a1018 100%)",
        display: "flex",
        zIndex: 1,
      }}
    >
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
            background: "linear-gradient(135deg, #1a6ddb, #22b8a0, #13c77b)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Cornerstone?
          </span>
        </div>
      </div>

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
                background: "linear-gradient(135deg, #1a6ddb, #13c77b)",
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
