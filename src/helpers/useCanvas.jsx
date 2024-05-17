import { useRef, useEffect } from "react";

export const useCanvas = (draw, update) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let frameCount = 0;
    let animationFrameId;
    draw(context);
    const render = () => {
      frameCount++;
      update(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [update]);

  return canvasRef;
};
