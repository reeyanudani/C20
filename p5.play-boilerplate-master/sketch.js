var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 100, 50, 50);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(400,300,50,100);
  fixedRect.shapeColor= "green";

movingRect.velocityY=5;
fixedRect.velocityY=-5;

  movingRect.debug = true;
  fixedRect.debug = true;
}

function draw() {
  background(0);  

  //movingRect.x = mouseX;
  //movingRect.y = mouseY;

  if(movingRect.x- fixedRect.x < movingRect.width/2+fixedRect.width/2 
    &&  fixedRect.x-movingRect.x <movingRect.width/2+fixedRect.width/2 
    &&movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
  && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2)
  {
    movingRect.shapeColor = "yellow";
    fixedRect.shapeColor = "yellow";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  if(movingRect.x- fixedRect.x < movingRect.width/2+fixedRect.width/2 
    &&  fixedRect.x-movingRect.x <movingRect.width/2+fixedRect.width/2 )
    
  {
    movingRect.velocityX = movingRect.velocityX*(-1);
    fixedRect.velocityX = fixedRect.velocityX*(-1);
  }
  if(movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
    && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
      movingRect.velocityY = movingRect.velocityY*(-1);
      fixedRect.velocityY = fixedRect.velocityY*(-1);
  }
  drawSprites();
}