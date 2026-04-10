import { AbsoluteFill, useCurrentFrame, spring, interpolate, useVideoConfig } from "remotion";
import { loadFont } from "@remotion/google-fonts/Montserrat";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";

const { fontFamily: montserrat } = loadFont("normal", { weights: ["700"], subsets: ["latin"] });
const { fontFamily: inter } = loadInter("normal", { weights: ["400"], subsets: ["latin"] });

const stats = [
  { value: "150+", label: "Campaigns Delivered" },
  { value: "3x", label: "Average ROI" },
  { value: "98%", label: "Client Retention" },
];

export const Scene3Stats: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #0a1018 0%, #060911 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
      }}
    >
      {(() => {
        const p = spring({ frame: frame - 5, fps, config: { damping: 20 } });
        return (
          <div style={{
            fontFamily: montserrat,
            fontSize: 48,
            fontWeight: 700,
            color: "#fff",
            marginBottom: 80,
            opacity: interpolate(p, [0, 1], [0, 1]),
            transform: `scale(${interpolate(p, [0, 1], [0.8, 1])})`,
          }}>
            Results That Speak
          </div>
        );
      })()}

      <div style={{ display: "flex", gap: 100 }}>
        {stats.map((stat, i) => {
          const delay = 15 + i * 15;
          const s = spring({ frame: frame - delay, fps, config: { damping: 12 } });

          return (
            <div key={i} style={{
              textAlign: "center",
              opacity: interpolate(s, [0, 1], [0, 1]),
              transform: `translateY(${interpolate(s, [0, 1], [50, 0])}px)`,
            }}>
              <div style={{
                fontFamily: montserrat,
                fontSize: 96,
                fontWeight: 700,
                background: "linear-gradient(135deg, #1a6ddb, #22b8a0, #13c77b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: 1,
              }}>
                {stat.value}
              </div>
              <div style={{
                fontFamily: inter,
                fontSize: 22,
                color: "rgba(255,255,255,0.5)",
                marginTop: 16,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}>
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
