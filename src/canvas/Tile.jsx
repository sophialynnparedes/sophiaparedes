export function Tile(c, x, y) {
  const TileColors = ["#3e0f3c", "#4f2958", "#5e4276", "#6c5c93", "#7a77b1"];
  this.x = x;
  this.y = y;
  this.color = TileColors[Math.floor(Math.random() * TileColors.length)];

  this.draw = function () {
    c.beginPath();
    c.fillStyle = this.color;
    c.fillRect(this.x, this.y, this.w, this.h);
  };

  this.update = function (frameCount) {
    this.x = Math.max(x + frameCount / 4, x);
    this.y = Math.max(y + frameCount / 4, y);
    this.w = Math.max(30 - frameCount / 2, 0);
    this.h = Math.max(30 - frameCount / 2, 0);
    c.beginPath();
    c.fillStyle = this.color;
    c.fillRect(this.x, this.y, this.w, this.h);
  };
}
