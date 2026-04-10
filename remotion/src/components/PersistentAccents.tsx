import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

export const PersistentAccents: React.FC = () => {
  const frame = useCurrentFrame();

  const orb1X = interpolate(frame, [0, 600], [0, 360]);
  const orb1Y = Math.sin(frame * 0.02) * 80;
  const orb2X = interpolate(frame, [0, 600], [1920, 800]);
  const orb2Y = Math.cos(frame * 0.015) * 100 + 540;

  return (
    <AbsoluteFill style={{ pointerEvents: "none", zIndex: 0 }}>
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,184,160,0.12) 0%, transparent 70%)",
          transform: `translate(${orb1X}px, ${orb1Y + 200}px)`,
          filter: "blur(60px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,109,219,0.08) 0%, transparent 70%)",
          transform: `translate(${orb2X}px, ${orb2Y}px)`,
          filter: "blur(50px)",
        }}
      />
    </AbsoluteFill>
  );
};
