var kitty;
function preload() {
  kitty = loadImage("spider.png");
}
function setup() {
  createCanvas(windowWidth-30,windowHeight-30);
}
function draw() {

noCursor();
noStroke();
clear();
  image(kitty, mouseX, mouseY);
}
