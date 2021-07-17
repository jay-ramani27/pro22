const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;

//Create multiple bobs, mulitple ropes varibale here
var rope;
var rope2;
var rope3;
var rope4;
var rope5;
var ball;
var ball2;
var ball3;
var ball4;
var ball5;



function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	var ball_options = {
	
		restitution: 0.8
		
	  }
	  
	  
	  ball = Bodies.circle(300,300,30,ball_options);
	  World.add(world,ball);

	  ball2 = Bodies.circle(300,300,30,ball_options);
	  World.add(world,ball2);

	  ball3 = Bodies.circle(300,300,30,ball_options);
	  World.add(world,ball3);

	  ball4 = Bodies.circle(300,300,30,ball_options);
	  World.add(world,ball4);

	  ball5 = Bodies.circle(300,300,30,ball_options);
	  World.add(world,ball5);

	 rope=Matter.Constraint.create({
	    bodyA:roof,
		pointA:{x:400,y:100},
		bodyB:ball,
		pointB:{x:400,y:300},
		length:100,
		stiffness:0.5
	  });



	  World.add(world,rope);

	  rope2=Matter.Constraint.create({
	    bodyA:roof,
		pointA:{x:300,y:100},
		bodyB:ball2,
		pointB:{x:400,y:300},
		length:100,
		stiffness:0.5
	  });
	  World.add(world,rope2);

	  rope3=Matter.Constraint.create({
	    bodyA:roof,
		pointA:{x:300,y:100},
		bodyB:ball3,
		pointB:{x:400,y:300},
		length:100,
		stiffness:0.5
	  });
	  World.add(world,rope3);

	  rope4=Matter.Constraint.create({
	    bodyA:roof,
		pointA:{x:300,y:100},
		bodyB:ball4,
		pointB:{x:400,y:300},
		length:100,
		stiffness:0.5
	  });
	  World.add(world,rope4);

	  rope5=Matter.Constraint.create({
	    bodyA:roof,
		pointA:{x:300,y:100},
		bodyB:ball5,
		pointB:{x:400,y:300},
		length:100,
		stiffness:0.5
	  });
	  World.add(world,rope5);
	
	ellipseMode(RADIUS);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");
  Engine.update(engine);
  
  rect(roof.position.x,roof.position.y,230,20);
  


  //call display() to show ropes here
  push();
  strokeWeight(2);
  stroke("black");
  line(roof.position.x,roof.position.y,ball.position.x,ball.position.y);
  line(roof.position.x,roof.position.y,ball2.position.x,ball2.position.y);
  line(roof.position.x,roof.position.y,ball3.position.x,ball3.position.y);
  line(roof.position.x,roof.position.y,ball4.position.x,ball4.position.y);
  line(roof.position.x,roof.position.y,ball5.position.x,ball5.position.y);

  pop()
  //create ellipse shape for multiple bobs here
  ellipse(ball.position.x,ball.position.y,30);
  ellipse(ball2.position.x,ball2.position.y,30);
  ellipse(ball3.position.x,ball3.position.y,30);
  ellipse(ball4.position.x,ball4.position.y,30);
  ellipse(ball5.position.x,ball5.position.y,30);

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
    }
}