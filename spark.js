var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;
var img10;

var xspeed = 10;
var xpos = 0;
var yspeed = 10;
var ypos = 700;


function preload() {
img1 = loadImage("images/static.jpg");
img2 = loadImage("images/computer.png");
img3 = loadImage("images/computer2.png");
img4 = loadImage("images/chair.png");
img5 = loadImage("images/ghost.png");
img6 = loadImage("images/desk_2.png");
img7 = loadImage("images/laptop.png");
img8 = loadImage("images/hourglass.png");
img9 = loadImage("images/sunset.jpg")
img10 = loadImage("images/computer3.png")
}
function setup() {
  createCanvas(2000, 1100);
}
function draw() {
  image(img9, 0, 0);

  if (mouseIsPressed){
    image(img1, 0, 0);
   }
 else {
     image(img9, 0, 0);
   }

  image(img6, 750, 600);

  image(img4, ypos, 700);
  if (ypos > 800) {
    yspeed = -10;
  }
  if (ypos < 600) {
    yspeed = 4;
  }
  ypos += yspeed;

 if (mouseIsPressed){
   image(img5, mouseX +3, mouseY + 10);
  }
else {
    image(img8, mouseX, mouseY);
  }

}
