
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;
var mConstraint;
var roof;
var sling1, sling2, sling3, sling4, sling5;
var bob1,bob2,bob3,bob4,bob5;



function setup() {
	createCanvas(800,800);
	
	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRadio = pixelDensity();
	let options={
		mouse: canvasmouse};

		mConstraint = MouseConstraint.create(engine,options);
		World.add(world, mConstraint);


	
	
    roof =new Roof(400,200,400,10);
	bob1 =new Pendulum(280,400,30);
	bob2 =new Pendulum(340,400,30);
	bob3 =new Pendulum(400,400,30);
	bob4 =new Pendulum(460,400,30);
	bob5 =new Pendulum(520,400,30);
	sling1=new Sling(bob1.body,roof.body,-120,0);
	sling2=new Sling(bob2.body,roof.body,-60,0);
   sling3=new Sling(bob3.body,roof.body,0,0);
  sling4=new Sling(bob4.body,roof.body,60,0);
  sling5=new Sling(bob5.body,roof.body,120,0);


	Engine.run(engine);
  
}


function draw() {
 rectMode(CENTER);
  background(100);
 

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();


  sling1.display();
  sling2.display();
  sling3.display();
 sling4.display();
  sling5.display();
}



function mouseDragged(){
Matter.Body.setPosition(bob1.body, {x : mouseX, y: mouseY})
}

