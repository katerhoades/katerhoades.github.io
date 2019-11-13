var kitty;
function preload() {
  kitty = loadImage("spider.png");
}
function setup() {
  createCanvas(windowWidth-10, windowHeight-10);
}
function draw() {


  image(kitty, 200+sin(frameCount*0.01)*100,
    200+cos(frameCount*0.05)*100);
  image(kitty, 100+cos(frameCount*0.01)*100,
    200+sin(frameCount*0.06)*100);
  image(kitty, mouseX, mouseY);
}
