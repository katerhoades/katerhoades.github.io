var kitty;
function preload() {
  kitty = loadImage("spider.png");
}
function setup() {
  createCanvas(widnowheight-10,windowwidth-10);
}
function draw() {

noCursor();
noStroke();
clear();
  image(kitty, mouseX, mouseY);
}
