var kitty;
function preload() {
  kitty = loadImage("spider.png");
}
function setup() {
  createCanvas(windowWidth-10, windowHeight-10);
}
function draw() {


  image(kitty, mouseX, mouseY);
}
