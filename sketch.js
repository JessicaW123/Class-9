var box;
function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(30);
  rect(200,200,30,30);

  if(keyIsDown(RIGHT_ARROW)){
    rect.position.x =rect.position.x +5;
  }
  drawSprites();
}