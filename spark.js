var kitty;
function preload() {
  kitty = loadImage("spider.png");
}
function setup() {
  createCanvas(windowWidth-20, windowHeight-20);
}
function draw() {
  background(50, 50, 240);
  imageMode(CENTER);
  image(kitty, 200+sin(frameCount*0.01)*100,
    200+cos(frameCount*0.05)*100);
  image(kitty, 200+cos(frameCount*0.01)*100,
    200+sin(frameCount*0.06)*100);
}
