const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var myworld,myengine,ground,box,box1;

function setup(){
  createCanvas(400,400)
  myengine=Engine.create();
  myworld=myengine.world
  
 ground=new Ground();
 box=new Box(200,380,70,70);
 box1=new Box(230,180,70,100);
}
function draw(){
  background(0)
  Engine.update(myengine)
  ground.display();
  box.display();
  box1.display();
}
