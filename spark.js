let img; // Declare variable 'img'.

function setup() {
  createCanvas(windowHeight, windowWidth);
  img = loadImage('kitten.jpg'); // Load the image
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  image(img, 0, 0);
  rect (20,20,20,20)


}
