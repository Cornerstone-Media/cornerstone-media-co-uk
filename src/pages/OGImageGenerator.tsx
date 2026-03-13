import { useEffect, useRef } from "react";
import logo from "@/assets/logo.png";

const OGImageGenerator = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 1200;
    canvas.height = 630;

    // Background gradient
    const grad = ctx.createLinearGradient(0, 0, 1200, 630);
    grad.addColorStop(0, "#070b14");
    grad.addColorStop(0.5, "#0d1a2a");
    grad.addColorStop(1, "#091520");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1200, 630);

    // Teal accent glow
    const radGrad = ctx.createRadialGradient(600, 315, 50, 600, 315, 400);
    radGrad.addColorStop(0, "rgba(25, 168, 202, 0.15)");
    radGrad.addColorStop(1, "rgba(25, 168, 202, 0)");
    ctx.fillStyle = radGrad;
    ctx.fillRect(0, 0, 1200, 630);

    // Load and draw logo
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const logoHeight = 180;
      const logoWidth = (img.width / img.height) * logoHeight;
      const x = (1200 - logoWidth) / 2;
      const y = 150;
      ctx.drawImage(img, x, y, logoWidth, logoHeight);

      // Subtitle text
      ctx.fillStyle = "#19A8CA";
      ctx.font = "600 28px 'Inter', 'Segoe UI', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("Digital Marketing Agency  |  Birmingham", 600, 420);

      // Accent line
      ctx.strokeStyle = "#19A8CA";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(350, 450);
      ctx.lineTo(850, 450);
      ctx.stroke();

      // Website URL
      ctx.fillStyle = "rgba(255,255,255,0.5)";
      ctx.font = "400 20px 'Inter', 'Segoe UI', sans-serif";
      ctx.fillText("cornerstonemedialtd.com", 600, 490);
    };
    img.src = logo;
  }, []);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "og-logo.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background p-8">
      <h1 className="font-heading text-2xl text-foreground">OG Image Preview (1200×630)</h1>
      <canvas
        ref={canvasRef}
        className="max-w-full border border-border rounded-lg"
        style={{ width: 600, height: 315 }}
      />
      <button onClick={handleDownload} className="gradient-btn text-base">
        Download OG Image
      </button>
      <p className="text-sm text-muted-foreground">
        Download this, then replace <code>public/og-logo.png</code> with it.
      </p>
    </div>
  );
};

export default OGImageGenerator;
