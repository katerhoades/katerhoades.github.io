var kitty;
function preload() {
  kitty = loadImage("spider.png");
}
function setup() {
  createCanvas(700,700);
}
function draw() {

noCursor();
noStroke();
clear();
  image(kitty, mouseX, mouseY);
}
