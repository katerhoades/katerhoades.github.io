var kitty;
function preload() {
  kitty = loadImage("spider.png");
}
function setup() {
  createCanvas(windowWidth-20, windowHeight-20);
}
function draw() {
    clear();
    image(kitty, mouseX, mouseY,
        200+sin(frameCount*0.1)*100,
        200+cos(frameCount*0.1)*100);
}
