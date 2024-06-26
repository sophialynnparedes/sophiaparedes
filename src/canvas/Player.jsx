export function Player(c) {
  this.x = 0;
  this.y = 0;
  this.speed = 5;
  this.image = document.getElementById("player");
  this.draw = function () {
    c.beginPath();
    c.fillStyle = "transparent";
    c.fillRect(this.x, this.y, 136, 296);
    c.drawImage(this.image, 45, 8, 136, 296, this.x, this.y, 136, 296);
  };
  this.update = function (frameCount, keys) {
    this.draw();
    if (keys.includes("d")) {
      this.x += this.speed;
    }
    if (keys.includes("a")) {
      this.x -= this.speed;
    }
    if (keys.includes("w")) {
      this.y -= this.speed;
    }
    if (keys.includes("s")) {
      this.y += this.speed;
    }
  };
}
