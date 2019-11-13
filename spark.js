
var img8;

function preload() {

img8 = loadImage("SparkVid.gif");

}
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {

    image(img8, mouseX, mouseY);
  }

}
