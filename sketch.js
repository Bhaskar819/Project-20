var car,wall;
var speed,weight;



function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2)
}

function draw() {
  background(255,255,255);  
 
  if(wall.x-car.x < (carwidth+wall.width)/2)
  {
     car.velocityX=0;
     var deformation=0.5 * weight * speed* speed/22509;
     if(deformation>1800)
     {
       car.shapeColor=color(255,0,0);
     }
     if (deformation<1000)
     {
       car.shapeColor=color(0,255,0);
     }
  }
 
 
 

  drawSprites();
}