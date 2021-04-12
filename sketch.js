const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bg;
var gr;
var bog

function preload(){
 bg =loadImage("images/bg.jpg");
}
function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world= engine.world;
gr= new Ground(600,370,1200,1)
bog= new boggy(50,170,50,50);
bog1= new boggy(100,170,50,50);
bog2= new boggy(150,170,50,50);
bog3= new boggy(200,170,50,50);
bog4= new boggy(250,170,50,50);

}

function draw() {
  background(bg);  
  Engine.update(engine);
gr.display();
bog.display();
bog1.display();
bog2.display();
bog3.display();
bog4.display();
  }

