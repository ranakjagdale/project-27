
var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var  bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, bobDiameter= 40;
var rope1,rope2,rope3,rope4,rope5;
var roofObject;
var hit="N";
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	roofObject= new Roof(350, 50, 700, 40);

	bobObject1= new Bob(250, 200);
	bobObject2= new Bob(300, 200);
	bobObject3= new Bob(350, 200);
	bobObject4= new Bob(400, 200);
	bobObject5= new Bob(450, 200);

	rope1 = new Rope(bobObject1.body, roofObject.body, -100, 0)
	rope2 = new Rope(bobObject2.body, roofObject.body, -50, 0)
	rope3 = new Rope(bobObject3.body, roofObject.body, 0, 0)
	rope4 = new Rope(bobObject4.body, roofObject.body, 50, 0)
	rope5 = new Rope(bobObject5.body, roofObject.body, 100, 0)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(240,240,240);
  roofObject.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

if (bobObject1.body.position.y === 200 && hit === "Y"){
	hit == "N";
	Matter.Body.applyForce(bobObject5.body, bobObject5.body.position, {x: 120, y:-70});
}

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
			hit = "Y";
			Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x: -100, y:-70});
		}
}


