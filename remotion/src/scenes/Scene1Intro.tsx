import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { loadFont } from "@remotion/google-fonts/Montserrat";

const { fontFamily: montserrat } = loadFont("normal", { weights: ["700", "400"], subsets: ["latin"] });

export const Scene1Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const lineReveal = spring({ frame: frame - 10, fps, config: { damping: 20, stiffness: 200 } });
  const titleY = interpolate(lineReveal, [0, 1], [80, 0]);
  const titleOpacity = interpolate(lineReveal, [0, 1], [0, 1]);

  const subtitleProgress = spring({ frame: frame - 30, fps, config: { damping: 25 } });
  const subtitleOpacity = interpolate(subtitleProgress, [0, 1], [0, 1]);
  const subtitleY = interpolate(subtitleProgress, [0, 1], [40, 0]);

  const tagProgress = spring({ frame: frame - 50, fps, config: { damping: 20 } });
  const tagOpacity = interpolate(tagProgress, [0, 1], [0, 1]);

  const accentWidth = interpolate(frame, [5, 40], [0, 120], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #060911 0%, #0a1018 40%, #060911 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
      }}
    >
      {/* Grid lines */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.04 }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} style={{
            position: "absolute",
            left: `${(i + 1) * 12.5}%`,
            top: 0,
            bottom: 0,
            width: 1,
            background: "#22b8a0",
          }} />
        ))}
      </div>

      <div style={{ textAlign: "center", position: "relative" }}>
        {/* Accent line */}
        <div style={{
          width: accentWidth,
          height: 3,
          background: "linear-gradient(90deg, #1a6ddb, #22b8a0, #13c77b)",
          margin: "0 auto 40px",
          borderRadius: 2,
        }} />

        <div style={{
          fontFamily: montserrat,
          fontSize: 88,
          fontWeight: 700,
          color: "#ffffff",
          letterSpacing: -2,
          transform: `translateY(${titleY}px)`,
          opacity: titleOpacity,
          lineHeight: 1.1,
        }}>
          CORNERSTONE
          <br />
          <span style={{
            background: "linear-gradient(135deg, #1a6ddb, #22b8a0, #13c77b)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            MEDIA
          </span>
        </div>

        <div style={{
          fontFamily: montserrat,
          fontSize: 26,
          fontWeight: 400,
          color: "rgba(255,255,255,0.6)",
          marginTop: 30,
          letterSpacing: 6,
          textTransform: "uppercase",
          transform: `translateY(${subtitleY}px)`,
          opacity: subtitleOpacity,
        }}>
          Digital Marketing Agency
        </div>

        <div style={{
          fontFamily: montserrat,
          fontSize: 20,
          fontWeight: 400,
          color: "#22b8a0",
          marginTop: 20,
          letterSpacing: 4,
          opacity: tagOpacity,
        }}>
          BIRMINGHAM · WEST MIDLANDS
        </div>
      </div>
    </AbsoluteFill>
  );
};
