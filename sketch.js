var car , wall;
var speed ,weight ;
 var deformation;


function setup() {

  createCanvas(1600,400);
  speed=  random(55,90)
  weight= random(400,1500)
  car = createSprite(50, 200, 50, 50);
  car.debug= true;
  wall=createSprite(1500,200,60,height/2)
  wall.shapeColor = "black";
  wall.debug = true;

  car.velocityX= speed;
}

function draw() {
  background(110,100,120);  
  if (wall.x-car.x<wall.width/2-car.width){
    car.velocityX=0;
    deformation=(0.5* weight*speed*speed) /22500;

    if(deformation<100){
      car.shapeColor(0,255,0)
    }
    if(deformation>100&& deformation<180){
      car.shapeColor(230,230,0)
    }
    if(deformation>180){
      car.shapeColor(0,255,0)
    }
   }
  drawSprites();
}