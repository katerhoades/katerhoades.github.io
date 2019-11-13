var kitty;
function preload() {
  kitty = loadImage("spider.png");
}
function setup() {
  createCanvas(600,600);
}
function draw() {

noCursor();
noStroke();
clear();
  image(kitty, mouseX, mouseY);
}
