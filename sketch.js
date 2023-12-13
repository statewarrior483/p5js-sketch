let yValue = 0;
let colorVal = 255;

let baloonYPos = 650

let colorR=0;
let colorG=0;

let changeVal = 0

const colours = ['red', 'green', 'yellow'];



function preload(){
  img = loadImage('./assets/cake.png')
}


function setup() {
  createCanvas(500, 650);
    solitaryBalloon = {
    x: random(width),         // Anywhere along the width
    y: height + 20,           // Off the bottom of the canvas
    speed: -2,                // Set to lift
    colour: random(colours),  // Choose a random colour from above
    popped: false             // Is the balloon popped?
  };
  noStroke();

img.resize(300, 300);
}


function draw() { 
 
  while (yValue < 650){
  stroke(colorVal,colorVal,255);
  line(0,yValue,500,yValue)
  yValue = yValue +1;
  colorVal=colorVal  -0.4;

     }

  drawBalloon(solitaryBalloon);
  moveBalloon(solitaryBalloon);

  image(img,145, 175)

  yValue = 0;
  colorVal = 255;

  push()
  noStroke();
  select('canvas').elt.style.letterSpacing = "8px";
  textFont('Cedarville Cursive')
  textSize(50);
  textAlign(CENTER);
  textStyle(BOLD);
  fill(255,0,0);
  fill(255,0,0);
  translate(500/2-180, 310)
  rotate(radians(-90))
  text("Happy Birthday!",0, 0);
  pop()

  
  
  push()
  noStroke();
  textFont('Cedarville Cursive')
  textSize(35);
  textAlign(CENTER);
  textStyle(BOLD);
  fill(255,0,0);
  fill(255,0,0);
  translate(950/2-180, 600)
  text("Ms. Labrie!",0, 0);
  pop()
  
  



  
  
  
 function drawBalloon(balloon) {
  // Draw a balloon - size is hard-coded at 40.
   
  // Main balloon
  noStroke();
  fill(balloon.colour);
  circle(balloon.x, balloon.y, 40);

  // Little triangle at the bottom
  triangle(balloon.x, balloon.y + 20, balloon.x + 4, balloon.y + 26, balloon.x - 4, balloon.y + 26);

  // Semi-transparent white ellipse for the highlight
  fill(255, 75);
  ellipse(balloon.x - 5, balloon.y - 8, 7, 10);

  // String hanging off the bottom
  stroke(0);
  noFill();
  bezier(balloon.x, balloon.y + 26, balloon.x - 10, balloon.y + 46, balloon.x + 10, balloon.y + 70, balloon.x, balloon.y + 80);
}

function moveBalloon(balloon) {
  balloon.y += balloon.speed;
}
 



}