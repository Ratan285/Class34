const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject;
var ground, rope;

function preload() {

}

function setup() {
  createCanvas(1500, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Roof(750, 1030, 1500, 500);
  bobObject = new Bob(140, 500);
  rope = new Rope(bobObject.body, { x: 500, y: 50 });
  boundary = new Border();

  box1 = new Block(900, 260 + 80, 70, 70);
  box2 = new Block(900, 340 + 80, 70, 70);
  box3 = new Block(900, 420 + 80, 70, 70);
  box4 = new Block(900, 500 + 80, 70, 70);
  box5 = new Block(900, 580 + 80, 70, 70);
  box6 = new Block(900, 660 + 80, 70, 70);
  box7 = new Block(700, 260 + 80, 70, 70); //
  box8 = new Block(700, 340 + 80, 70, 70);
  box9 = new Block(700, 420 + 80, 70, 70);
  box10 = new Block(700, 500 + 80, 70, 70);
  box11 = new Block(700, 580 + 80, 70, 70);
  box12 = new Block(700, 660 + 80, 70, 70);
  box13 = new Block(800, 180 + 80, 70, 70); //
  box14 = new Block(800, 260 + 80, 70, 70);
  box15 = new Block(800, 340 + 80, 70, 70);
  box16 = new Block(800, 420 + 80, 70, 70);
  box17 = new Block(800, 500 + 80, 70, 70);
  box18 = new Block(800, 580 + 80, 70, 70);
  box19 = new Block(800, 660 + 80, 70, 70);

  Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(255);

  push();
  textSize(30);
  text(mouseX + "," + " " + mouseY, 100, 100);
  pop();

  ground.display();
  rope.display();
  bobObject.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();

}
function mouseDragged() {
  Matter.Body.setPosition(bobObject.body, { x: mouseX, y: mouseY });
}