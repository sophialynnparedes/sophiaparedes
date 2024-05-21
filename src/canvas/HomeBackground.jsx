import { useCanvas } from "../helpers/useCanvas";
import { Tile } from "./Tile";

export default function HomeBackground(props) {
  let TileArray = [];

  const draw = (ctx) => {
    const rowLength = ctx.canvas.width / 30;
    const colLength = ctx.canvas.height / 30;

    for (var row = 0; row < rowLength; row++) {
      for (var col = 0; col < colLength; col++) {
        let tile = new Tile(ctx, 30 * row, 30 * col);
        TileArray.push(tile);
        tile.draw();
      }
    }
  };

  const update = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#000000";
    for (var i = 0; i < TileArray.length; i++) {
      TileArray[i].update(frameCount - 100);
    }
  };

  const canvasRef = useCanvas(draw, update);
  return (
    <canvas
      className="background"
      ref={canvasRef}
      width="3000px"
      height="3000px"
    />
  );
}
