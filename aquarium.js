let fishX, fishY, fishSize;
let fishX2, fishY2;
let fishColor, fishColor2;
let aquariumName = "My Aquarium";
let foodX, foodY;
let foodDropped = false;
let bubbles = [];
let up=false,down=false,left=false,right=false;


function setup() {
  createCanvas(800, 600);
  fishX = width / 2;
  fishY = height / 2;
  fishSize = 50;
  fishColor = color(200, 100, 100);

  // second fish
  fishX2 = width/2
  fishY2=height/4
  fishColor2 = color(134,178,217)


  // Initialize bubbles
  for (let i = 0; i < 20; i++) {
    bubbles.push({
      x: random(width),
      y: random(height),
      size: random(5, 15)
    });
  }
}


function draw() {
  background(50, 150, 200);
 
  // Display aquarium name
  textSize(24);
  fill(255);
  text(aquariumName, 10, 30);
 
  // Draw fish
  fill(fishColor);
  ellipse(fishX, fishY, fishSize, fishSize / 2);
  triangle(fishX - fishSize / 2, fishY, fishX - fishSize, fishY - fishSize / 4, fishX - fishSize, fishY + fishSize / 4);
  
  // Draw fish 2
  fill(fishColor2)
  ellipse(fishX2, fishY2, fishSize, fishSize / 2);
  triangle(fishX2 - fishSize / 2, fishY2, fishX2 - fishSize, fishY2 - fishSize / 4, fishX2 - fishSize, fishY2 + fishSize / 4);

  // Fish follows mouse
  fishX = lerp(fishX, mouseX, 0.05);
  fishY = lerp(fishY, mouseY, 0.05);


  // Draw bubbles
  for (let i = 0; i < bubbles.length; i++) {
    fill(255, 255, 255, 150);
    noStroke();
    ellipse(bubbles[i].x, bubbles[i].y, bubbles[i].size);
    bubbles[i].y -= 1;


    // Reset bubble to bottom if it goes off the top
    if (bubbles[i].y < 0) {
      bubbles[i].y = height;
    }
  }
 
  // Draw food
  if (foodDropped) {
    fill(255, 204, 0);
    ellipse(foodX, foodY, 10, 10);
    foodY += 2;
    if (foodY > height) {
      foodDropped = false;
    }
  }
 
  // Check if fish is near food
  if (dist(fishX, fishY, foodX, foodY) < fishSize / 2 && foodDropped) {
    fishColor = color(100, 200, 100);
    foodDropped = false;
  } else {
    fishColor = color(200, 100, 100);
  }
  // second fish eats food
  if (dist(fishX2, fishY2, foodX, foodY) < fishSize / 2 && foodDropped) {
    fishColor2 = color(100, 200, 100);
    foodDropped = false;
  } else {
    fishColor2 = color(134, 178, 217);
  }
  if(up===true){
    fishY2-=2
  }else{
    fishY2+=0
  }
  if(left===true){
    fishX2-=2
  }else{
    fishX2+=0
  }
  if(down===true){
    fishY2+=2
  }else{
    fishY2+=0
  }
  if(right===true){
    fishX2+=2
  }else{
    fishX2+=0
  }
}


function keyPressed() {
  // Drop food
  if (key === 'F' || key === 'f') {
    foodX = random(width);
    foodY = 0;
    foodDropped = true;
  }

  // move second fish
  
  if(key==='W'|| key==='w'){
    up=true
  }
  if(key==='A'|| key==='a'){
    left=true
  }
  if(key==='S'|| key==='s'){
    down=true
  }
  if(key==='D'|| key==='d'){
    right=true
  }
}

function keyReleased(){
  if(key==='W'|| key==='w'){
    up=false
  }
  if(key==='A'|| key==='a'){
    left=false
  }
  if(key==='S'|| key==='s'){
    down=false
  }
  if(key==='D'|| key==='d'){
    right=false
  }
  
}
