var bug;
function preload() {
  bug = loadImage("spider.png");
}
function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(255);
  image(bug, mouseX, mouseY);
  rect (10,10,10,10);
}
