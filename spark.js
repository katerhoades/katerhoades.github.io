var kitty;
function preload() {
  kitty = loadImage("spider.png");
}
function setup() {
  createCanvas(windowHeight-20, windowWidth-20);
}
function draw() {
    background(255);
    imageMode(CENTER);
    image(kitty, mouseX, mouseY,
        200+sin(frameCount*0.1)*100,
        200+cos(frameCount*0.1)*100);
}
