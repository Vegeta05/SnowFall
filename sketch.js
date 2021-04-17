const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;
var snow1;
var engine, world;


function preload(){
  backgroundImg = loadImage('snow2.jpg');
}

function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  snow1 = new Snow(400,100);
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);
  snow1.display();
  drawSprites();
}