const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world
var ground;
var box1;
var box2;
var box3;
var box4;
var box5;
var SlingShot;
var polygon1,polygonImage;
function preload () {
    polygonImage=loadImage('polygon.png');
}

function setup () {
    createCanvas(1200,800) 
      engine = Engine.create();
    world = engine.world;
    ground = new Ground (600,600,400,10)
    box1= new Box(650,550,50,50);
      
}
function draw() {
    background(0);
     Engine.update(engine);
    ground.display();
    box1.display();
     box2.display();
    box3.display();
    box4.display();
     box5.display();
}