
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

	ground = new Ground(400,600,700,20);

	//Create the Bodies Here.
	ball1= new Paper(300,400,30);
	

	box1= new Box(680,585,100,10);
	box2= new Box(630,540,10,100);
	box3= new Box(730,540,10,100);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
	keypressed();

  ground.display();
  ball1.display();
  box1.display();
  box2.display();
  box3.display();
 
}

function keypressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:1,y:-1});
	}
}


