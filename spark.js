var kitty;
function preload() {
  kitty = loadImage("spider.png");
}
function setup() {
  createCanvas(windowWidth-10, windowHeight-10);
}
function draw() {

noCursor();
noStroke();
background();
  image(kitty, mouseX, mouseY);
}
