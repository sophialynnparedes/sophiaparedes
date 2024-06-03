import { useCanvas } from "../helpers/useCanvas";
import { Player } from "./Player";

export default function AboutMeGame() {
  var keys = [];
  window.addEventListener("keydown", (e) => {
    console.log(e.key);
    if (
      (e.key === "w" || e.key === "a" || e.key === "s" || e.key === "d") &&
      keys.indexOf(e.key) === -1
    ) {
      keys.push(e.key);
      console.log(keys);
    }
  });
  window.addEventListener("keyup", (e) => {
    if (e.key === "w" || e.key === "a" || e.key === "s" || e.key === "d") {
      keys.splice(keys.indexOf(e.key), 1);
    }
  });
  var spriteArray = [];
  const draw = (ctx) => {
    let player = new Player(ctx);
    spriteArray.push(player);
    player.draw();
  };
  const update = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#000000";
    for (var i = 0; i < spriteArray.length; i++) {
      spriteArray[i].update(frameCount, keys);
    }
  };
  const canvasRef = useCanvas(draw, update);

  return (
    <>
      <canvas className="game" ref={canvasRef} width="1520px" height="920px" />
      <img id="player" src="Paredes.png" />
    </>
  );
}
