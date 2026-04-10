import { AbsoluteFill, useCurrentFrame, spring, interpolate, useVideoConfig } from "remotion";
import { loadFont } from "@remotion/google-fonts/Montserrat";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";

const { fontFamily: montserrat } = loadFont("normal", { weights: ["700", "400"], subsets: ["latin"] });
const { fontFamily: inter } = loadInter("normal", { weights: ["400"], subsets: ["latin"] });

export const Scene5CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleP = spring({ frame: frame - 10, fps, config: { damping: 15 } });
  const phoneP = spring({ frame: frame - 35, fps, config: { damping: 20 } });
  const urlP = spring({ frame: frame - 50, fps, config: { damping: 20 } });
  const tagP = spring({ frame: frame - 65, fps, config: { damping: 25 } });

  const glowOpacity = interpolate(Math.sin(frame * 0.08), [-1, 1], [0.15, 0.35]);

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #060911 0%, #0a1018 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
      }}
    >
      <div style={{
        position: "absolute",
        width: 600,
        height: 600,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(34,184,160,0.2) 0%, transparent 70%)",
        opacity: glowOpacity,
        filter: "blur(80px)",
      }} />

      <div style={{ textAlign: "center", position: "relative" }}>
        <div style={{
          fontFamily: montserrat,
          fontSize: 64,
          fontWeight: 700,
          color: "#fff",
          lineHeight: 1.2,
          opacity: interpolate(titleP, [0, 1], [0, 1]),
          transform: `scale(${interpolate(titleP, [0, 1], [0.85, 1])})`,
        }}>
          Ready to{" "}
          <span style={{
            background: "linear-gradient(135deg, #1a6ddb, #22b8a0, #13c77b)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Grow?
          </span>
        </div>

        <div style={{
          fontFamily: montserrat,
          fontSize: 42,
          fontWeight: 700,
          background: "linear-gradient(135deg, #1a6ddb, #22b8a0, #13c77b)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginTop: 50,
          opacity: interpolate(phoneP, [0, 1], [0, 1]),
          transform: `translateY(${interpolate(phoneP, [0, 1], [30, 0])}px)`,
          letterSpacing: 2,
        }}>
          07846 798 534
        </div>

        <div style={{
          fontFamily: inter,
          fontSize: 28,
          color: "rgba(255,255,255,0.6)",
          marginTop: 24,
          opacity: interpolate(urlP, [0, 1], [0, 1]),
          transform: `translateY(${interpolate(urlP, [0, 1], [20, 0])}px)`,
          letterSpacing: 3,
        }}>
          cornerstone-media.co.uk
        </div>

        <div style={{
          fontFamily: inter,
          fontSize: 18,
          color: "rgba(255,255,255,0.35)",
          marginTop: 40,
          letterSpacing: 5,
          textTransform: "uppercase",
          opacity: interpolate(tagP, [0, 1], [0, 1]),
        }}>
          Free Strategy Consultation
        </div>
      </div>
    </AbsoluteFill>
  );
};
