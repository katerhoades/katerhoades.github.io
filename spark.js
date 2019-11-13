var kitty;
function preload() {
  kitty = loadImage("spider.png");
}
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(255);
  image(kitty, mouseX, mouseY);
}
