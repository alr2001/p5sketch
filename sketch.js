let catSmile = false;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200, 230, 255); //light blue background

  //Milos body
  fill(150, 110, 90); //brown color
  ellipse(200, 300, 150, 100); //body

  //Milos head
  fill(150, 110, 90);
  ellipse(200, 200, 120, 120); //Head

  //Milos ears
  triangle(150, 160, 180, 110, 190, 160); //left ear
  triangle(210, 160, 220, 110, 250, 160); //right ear

  //Eyes
  fill(0); //black color
  ellipse(180, 200, 20, 30); //left eye
  ellipse(220, 200, 20, 30); //right eye

  //nose
  fill(255, 150, 150); //pink color
  triangle(195, 220, 200, 230, 205, 220); //nose

  //Milos mouth
  stroke(0); //black outline
  if (catSmile) {
    noFill();
    arc(200, 240, 40, 20, 0, PI); //smile upon clicking
  } else {
    line(195, 240, 200, 245); //left line
    line(205, 240, 200, 245); //right line
  }

  //Milos whiskers
  line(160, 230, 190, 230); //left whisker 1
  line(160, 240, 190, 240); //left whisker 2
  line(210, 230, 240, 230); //right whisker 1
  line(210, 240, 240, 240); //right whisker 2

  //draw text
  noStroke();
  fill(0);
  textSize(16);
  textAlign(CENTER);
  text("Click to make Milo smile!", 200, 50);
}

// Toggle smile on mouse press
function mousePressed() {
  catSmile = !catSmile;
}
