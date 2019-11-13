var bug;
function preload() {
  bug = loadImage("bug.gif");
}
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(255);
  image(bug, mouseX, mouseY);
}
