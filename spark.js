var kitty;
function preload() {
  kitty = loadImage("spider.png");
}
function setup() {
  createCanvas(windowWidth-20, windowHeight-20);
}
function draw() {

  image(kitty, mouseX, mouseY);
}
