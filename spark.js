var kitty;
function preload() {
  kitty = loadImage("spider.png");
}
function setup() {
  createCanvas(500, 500);
}
function draw() {

noCursor();
noStroke();
background();
  image(kitty, mouseX, mouseY);
}
