const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var stones = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  ground = new Base(windowWidth/2, windowHeight - 10, windowWidth,10);
  leftWall = new Base(100,windowHeight/2, 300, 100);
  rightWall = new Base(width - 100,windowHeight/2, 600, 100);

  joinPoint = new Base(width - 300, height/2, 40, 20)
  bridge = new Bridge(17, {x:100, y:height/2});
  Matter.Composite.add(bridge.body,joinPoint);
  joinLink = new Link(bridge, joinPoint);

  for(var i = 0; i <= 8; i++) {
    var x = random(width/2 - 200, width / 2 +300);
    var y = random(-10, 140);
    var stone = new Stone(x,y, 80, 80);
    stones.push(stone);
  }

}

function draw() {
  background(51);
  Engine.update(engine);

  
  ground.show();
  leftWall.show();
  rightWall.show();
  bridge.show();

  for(var i = 0; i < stones.length; i++){
    stones[i].show();
  }
}
