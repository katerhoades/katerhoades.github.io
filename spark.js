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
        300+sin(frameCount*0.05)*100,
        300+cos(frameCount*0.05)*100);
}
