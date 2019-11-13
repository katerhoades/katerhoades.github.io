
var img8;

function preload() {

img8 = loadImage("SparkVid.gif");

}
function setup() {
  createCanvas(300, 300);
}
function draw() {

    image(img8, 30, 30);
    rect (20,10,10,20)
  }

}
