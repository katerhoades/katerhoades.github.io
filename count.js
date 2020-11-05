let input, x, y

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




function preload() {
img1 = loadImage("images/blue.png");
img2 = loadImage("images/red.png");
img3 = loadImage("images/anarch.png");
img4 = loadImage("images/maga.png");
img5 = loadImage("images/score.png");
img6 = loadImage("images/sky.png");
img7 = loadImage("images/background.png");
img8 = loadImage("images/desk.png");
  


}
  
function setup() {
  createCanvas(900, 668);
  
  x = width / 2;
  y = height / 2;
  
  input = createInput();
  input.position(30, 65);
  input.size(70, 25)
  input = createInput();
  input.position(190, 60);
  input.size(70, 25)
}
  
function draw() {
  
  image(img7, 0, 0);
  image(img6, 500, -20);
    image(img3, 620+cos(frameCount*0.01)*90,
    145+sin(frameCount*0.09)*8);
  image(img4, 650+cos(frameCount*0.03)*60,
    105+sin(frameCount*0.03)*4);
  image(img8, 0, 0);
  image(img5, 5, 5);
  image(img1, x-30, y+500)
  image(img2, x-100, y+1500)
  image(img1, x-310, y+2000)
  image(img2, x-90, y+2500)
  image(img1, x-100, y+3000)
  image(img1, x-40, y+3500)
  image(img1, x-290, y+4000)
  image(img2, x-430, y+4600)
  image(img1, x-10, y+5200)
  image(img1, x-100, y+6200)
  image(img2, x-30, y+6600)
  image(img1, x-200, y+7200)
  image(img1, x-330, y+7600)
  image(img1, x-300, y+8200)
  image(img2, x-230, y+9600)
  image(img1, x-111, y+10200)
  image(img1, x-30, y+10600)
  
  image(img1, x-30, y+10500)
  image(img2, x-100, y+11500)
  image(img1, x-310, y+12000)
  image(img2, x-90, y+12500)
  image(img1, x-100, y+13000)
  image(img1, x-40, y+13500)
  image(img1, x-290, y+14000)
  image(img2, x-430, y+14600)
  image(img1, x-10, y+15200)
  image(img1, x-100, y+16200)
  image(img2, x-30, y+16600)
  image(img1, x-200, y+17200)
  image(img1, x-330, y+17600)
  image(img1, x-300, y+18200)
  image(img2, x-230, y+19600)
  
    image(img1, x-30, y+20500)
  image(img2, x-100, y+21500)
  image(img1, x-310, y+22000)
  image(img2, x-90, y+22500)
  image(img1, x-100, y+23000)
  image(img1, x-40, y+23500)
  image(img1, x-290, y+24000)
  image(img2, x-430, y+24600)
  image(img1, x-10, y+25200)
  image(img1, x-100, y+26200)
  image(img2, x-30, y+26600)
  image(img1, x-200, y+27200)
  image(img1, x-330, y+27600)
  image(img1, x-300, y+28200)
  image(img2, x-230, y+29600)
  
      image(img1, x-30, y+30500)
  image(img2, x-100, y+31500)
  image(img1, x-310, y+32000)
  image(img2, x-90, y+32500)
  image(img1, x-100, y+33000)
  image(img1, x-40, y+33500)
  image(img1, x-290, y+34000)
  image(img2, x-430, y+34600)
  image(img1, x-10, y+35200)
  image(img1, x-100, y+36200)
  image(img2, x-30, y+36600)
  image(img1, x-200, y+37200)
  image(img1, x-330, y+37600)
  image(img1, x-300, y+38200)
  image(img2, x-230, y+39600)
  
    y = y - 1;
    x = x + random(-1, 1);
  

  
  
 }
