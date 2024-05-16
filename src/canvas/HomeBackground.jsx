import { useEffect, useRef } from "react";

export default function HomeBackground(props) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    //Our first draw
    context.fillStyle = "#000000";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  }, []);

  return <canvas className="background" ref={canvasRef} />;
}
