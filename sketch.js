const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var obj;

function setup() {
  var canvas=createCanvas(400,400);

  engine=Engine.create();
  world=engine.world;

  
  var opt={
    isStatic:true
  }
  obj=Bodies.rectangle(200,100,50,50,opt);
  World.add(world,obj);

}

function draw() {
  background(0); 
  Engine.update(engine); 
  rectMode(CENTER);
  rect(obj.position.x,obj.position.y,50,50);

}