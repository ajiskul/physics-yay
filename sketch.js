var Engine=Matter.Engine
var World=Matter.World
var Bodies=Matter.Bodies

var engine,world,ground,ball


function setup() {
  createCanvas(800,400);
  engine=Engine.create()

  world=engine.world
  var ground_op={
    isStatic:true
  }
  ground=Bodies.rectangle(400,390,800,5,ground_op)
  World.add(world, ground)
  
  var ball_op={
    restitution:1,
    friction:0,
    frictionAir:0
  }
  ball=Bodies.circle(400,100,30,ball_op)
  World.add(world, ball)
  console.log(ball)
}

function draw() {
  background(10,10,10);  
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 800, 5)
  ellipseMode(CENTER)
  ellipse(ball.position.x, ball.position.y, 30,30)
}