var spider;
function preload() {
  spider = loadImage("spider.png");
}
function setup() {
  createCanvas(800, 800);
}
function draw() {

  rect (10,10,10,10);
  image(spider, mouseX, mouseY);

}
