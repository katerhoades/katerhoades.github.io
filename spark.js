var kitty;
function preload() {
  kitty = loadImage("SparkVid.gif");
}
function setup() {
  createCanvas(400, 400);
}
function draw() {

  image(kitty, mouseX, mouseY);
}
