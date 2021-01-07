var fixedRect, movingRect, car, wall;

function setup() {
  createCanvas(1000,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car=createSprite(200,200,50,50);
  car.shapeColor="blue";
  car.velocityX=4;

  wall=createSprite(850,200,20,100);
  wall.shapeColor="purple";
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(movingRect, wall)){
   //car.velocityX=0;
   textSize(20);
   text("Touched",300,200);
 };

 bounceOff(car, wall);
 drawSprites();
}

