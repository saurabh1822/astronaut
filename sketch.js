var sleep,gym,bath,eat,brush,drink,background,move
var astronaut

function preload(){
  background=loadImage("image/iss.png")
  sleep=loadImage("image/sleep.png")
  gym=loadAnimation("image/gym1.png","image/gym2,png","image/gym11.png","image/gym12.png")
  bath=loadAnimation("image/bath1.png","image/bath2.png")
  eat=loadAnimation("image/eat1.png","image/eat2.png")
  brush=loadImage("image/bruch.png")
  drink=loadAnimation("image/drink1.png","image/drink2.png")
  move=loadAnimation("image/move.png","image/move2.png")
}

function setup() {
  createCanvas(600,6000);

  astronaut=addImage("slepping",sleep)
 astronaut=createSprite(400, 200);
 astronaut.scale=0.1;
}

function draw() {
  background(background);  
  drawSprites();

  textSize(25);
  Fill("black")
  text("Instruction",20,35)
  textSize(15)
  text("Up Arrow = Brushing",15,55)
  text("down Arrow = Gyming",15,70)
  text("Righr Arrow = bathing",15,85)
  text("Left Arrow = eating",15,100)
  text("s key = moving",15,115)
  
 edges=createEdgesSprites();
 astronaut.bounceOff(edges);

 if(keyDown("Up_Arrow")){
   astronaut.addImage("brushing",brush)
   astronaut.changeImage("brushing")
   astronaut.y=300;
   astronaut.velocityX =0;
   astronaut.velocityY=0;
 }
 if(keyDown("Down Arrow")){
   astronaut.addAnimation("gyming",gym)
   astronaut.changeAnimation("gyming")
   astronaut.y=350
   astronaut.velocityX=0
   astronaut.velocityY=0
 }
 if(keyDown("Right_Arrow")){
   astronaut.addAnimation("bathing".bath)
   astronaut.changeAnimation("bathing")
   astronaut.y=350;
   astronaut.velocityX=0
   astronaut.velocityY=0
 }
 if(keyDown("Left_Arrow")){
   astronaut.addAnimation("eating",eat)
   astronaut.changeAnimation("eating")
   astronaut.x=150
   astronaut.y=350
   astronaut.velocityX=1
   astronaut.velocityY=1
 }
 if(keyDown("s")){
   astronaut.addAnimation("moving",move)
   astronaut.changeAnimation("moving")
   astronaut.velocityX=2
   astronaut.velocityY=2
 }
}