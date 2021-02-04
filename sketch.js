var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	backgroundIMG=loadImage("background2.jpg")
	smokeIMG=loadImage("red-smoke.png")
	
}

function setup() {
	createCanvas(displayWidth-20,displayHeight-30);
	rectMode(CENTER);
	//background(125);
	
	backgroundSprite=createSprite(0,displayHeight,displayWidth*10,displayHeight*10)
	backgroundSprite.addImage(backgroundIMG)
	backgroundSprite.scale=3.5;
	backgroundSprite.x=backgroundSprite.width/2


	
	packageSprite=createSprite(width/4, 50, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	

	helicopterSprite=createSprite(400, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	

	groundSprite=createSprite(width/2, height, width,10);
	groundSprite.shapeColor=color(255)
	groundSprite.x=groundSprite.width/2
	//var stick1=createSprite(380,550,90,20)
	
	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;


 	

	Engine.run(engine);
  
}


function draw() {
  
 background(125);
  image(backgroundIMG,0,displayHeight,displayWidth*5,displayHeight)

//   if(ground.x<0){
// 	  groundSprite.x=groundSprite.width/2
	
//   }
//   groundSprite.velocityX=-5;

backgroundSprite.velocityX=-5;

if(backgroundSprite.x<0){
	backgroundSprite.x=backgroundSprite.width/2
}
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  
  
  drawSprites();
  spawnObstacles();
  
 
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {

    //helicopterSprite.velocityX=-5;    
    translation={x:-20,y:0}
    Matter.Body.translate(packageBody, translation)


  } else if (keyCode === RIGHT_ARROW) {
	//helicopterSprite.velocityX=5; 
    translation={x:20,y:0}
    Matter.Body.translate(packageBody, translation)
  }
  else if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    packageBody.velocityX="4";
  }
}

function spawnObstacles(){
if(frameCount%240===0){
	var smoke=createSprite(displayWidth,displayHeight-50)
	smoke.velocityX=-4
	smoke.addImage(smokeIMG);
	smoke.scale=0.5;
}






}






