var bg;
var spark;

function preload()
{
// load images
bg = loadImage("sparkler\RiverNight.jpg");
spark = loadImage("sparkler\SparkVid.gif");
}

function setup()
{
// set canvas size
createCanvas(400,400);

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
