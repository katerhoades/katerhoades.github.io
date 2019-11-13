var kitty;
function preload() {
  kitty = loadImage("C:\Users\KATER\Desktop\Art75\GitHub\Test\katerhoades.github.io\spider.png");
}
function setup() {
  createCanvas(windowWidth-20, windowHeight-20);
}
function draw() {

  image(kitty, mouseX, mouseY);
}
