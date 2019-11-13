var bg;
var spark;

function preload()
{
// load images
bg = loadImage("RiverNight.jpg");
spark = loadImage("SparkVid.gif");
}

function setup()
{
// set canvas size
createCanvas(windowWidth,windowHeight);

// hide mouse cursor
noCursor();
}

function draw()
{

// display background image
image(bg, 0, 0);

// display ufo
image(spark, mouseX, mouseY);

}
