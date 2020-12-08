
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = createSprite(width/2, 650, width, 10 , {isStatic:true} );
	ground.shapeColor=color(225);
	 World.add(world, ground);



	box1=createSprite(600,640,200,20);
	box1.shapeColor=color(225,0,0);

	box1=createSprite(500,600,20,100);
	box1.shapeColor=color(225,0,0)

	box1=createSprite(700,600,20,100);
	box1.shapeColor=color(225,0,0)


	
	
 
	
	ball1=new PaperBall(200,300,20);
	



	
console.log(ground)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background(0);
 drawSprites();
 ellipseMode(RADIUS);
 
 ball1.display();
  
}



