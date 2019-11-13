var kitty;
function preload() {
  kitty = loadImage("spider.png");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
}
function draw() {

noCursor();
noStroke();
clear();
  image(kitty, mouseX, mouseY);
}
