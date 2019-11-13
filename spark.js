var bug;
function preload() {
  bug = loadImage("spider.png");
}
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(255);
  image(bug, mouseX, mouseY);
  rect (10,10,10,10);
}
