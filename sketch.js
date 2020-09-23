
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstaclesGroup
var score=0;
var ground;
var rand;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(80, 350, 20, 20);
  monkey.addAnimation("running", monkey_running);
monkey.scale = 0.1;
  
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -(3 + 3* score/100);
ground.x = ground.width/2;
  
  foodGroup = createGroup();
  obstaclesGroup = createGroup();
  
 // score = 0;
  
 stroke("white");
  textSize(20);
  fill("white"); 
}


function draw() {
background("white");
  
  
  
  
 
  
  
  
  if(foodGroup.isTouching(monkey)){
    foodGroup.destroyEach();
    //score=score+1;
      }
 
  if(ground.x < 0){
  ground.x = ground.width/2;
   
   }
  
  if(keyDown("space")){
    monkey.velocityY = -15;
     
     }
  
   
 
  
  monkey.velocityY += 0.8;
  
  
  monkey.collide(ground);
  
food();
  
 obstacles();
  
  
  drawSprites();
  
  Score();
  
  if(obstaclesGroup.isTouching(monkey)){
    ground.velocityX = 0;
    monkey.velocityY = 0;
    obstaclesGroup.setVelocityXEach(0);
    foodGroup.setVelocityXEach(0);
    obstaclesGroup.setLifetimeEach(-1);
    foodGroup.setLifetimeEach(-1);
    
     }
}

function Score(){
  
  
 stroke("black");
 textSize(20);
  fill("black");
  survivalTime =Math.ceil(frameCount/frameRate());
    
  text("survival Time:"+survivalTime,100,50);
  
}
  


 function food() {
  
 if(frameCount % 80 === 0){
 //  var rand = Math.round(random());
 var banana = createSprite(400, 200, 20, 20);
   banana.addImage("b", bananaImage);
   banana.velocityX = -3;
   banana.y = Math.round(random(120,200));
   banana.scale = 0.1;
  banana.lifetime = 150;
   foodGroup.add(banana);
   
   }
 }

 function obstacles(){
if(frameCount % 300 === 0){
   // var positon = Math.round(random(1,2,3,4));
   var obstacle = createSprite(200,330,30,30);
  obstacle.x = Math.round(random(300, 301));
  obstacle.addImage("o", obstacleImage);
  obstacle.velocityX = -3
  obstacle.lifetime = 90;
  obstacle.scale = 0.1;
  obstaclesGroup.add(obstacle);
  

}
 }

