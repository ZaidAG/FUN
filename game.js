var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud,animatedCloud
var cloudGrrroouupp
var obstacles,animatedObstacle1,animatedObstacle2,animatedObstacle3, animatedObstacle4,animatedObstacle5,animatedObstacle6,obstaclesGroup
var r;
var score

function preload(){
  racoon_running = loadAnimation(".png",".png",".png");
  trex_collided = loadImage(".png");
  animatedCloud=loadImage(".png");
  animatedObstacle1=loadImage(".png");
  animatedObstacle2=loadImage(".png");
  animatedObstacle3=loadImage(".png");
  animatedObstacle4=loadImage(".png");
  animatedObstacle5=loadImage(".png");
  animatedObstacle6=loadImage(".png");
  
  groundImage = loadImage("ground.jfif")
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  cloudGrrroouupp=createGroup();
  obstaclesGroup=createGroup();

  score=0;
}

function draw() {
  background(2200);
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  text("SCORE:"+score,540,50);
  spawnClouds();
  spawnObstacles();
  
  drawSprites();
}
function spawnObstacles(){
   if(frameCount%80===0){
     obstacles=createSprite(600,170,20,20);
     obstacles.velocityX=-3;
     obstacles.lifetime=300;
     r=random(1,6);
     r=Math.round(r);
     console.log(r);
     switch(r){
       case 1: obstacles.addImage(animatedObstacle1);
         break;
        case 2: obstacles.addImage(animatedObstacle2);
         break;
        case 3: obstacles.addImage(animatedObstacle3);
         break;
        case 4: obstacles.addImage(animatedObstacle4);
         break;
        case 5: obstacles.addImage(animatedObstacle5);
         break;
        case 6: obstacles.addImage(animatedObstacle6);
         break;
         default:break;
     }
     obstacles.scale=0.5;
     obstaclesGroup.add(obstacles);
   }
}
function spawnClouds(){
  if(frameCount%60===0){
    cloud=createSprite(600,50,20,20);
  cloud.velocityX=-3;
    cloud.addImage("cloud",animatedCloud)
    cloud.y=random(40,120);
    cloud.lifetime=200;
    cloud.depth=trex.depth;
    trex.depth=trex.depth+1;
    cloudGrrroouupp.add(cloud);
  }
}