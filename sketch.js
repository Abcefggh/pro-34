const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var BackgroundImg;
var ground;
var HeroImg;
var superman;
var monster;


function preload() {
//preload the images here
BackgroundImg=loadImage("GamingBackground.png");
HeroImg=loadImage("Superhero-01.png");

}

function setup() {
  createCanvas(1200, 600);
  // create sprites here
  engine = Engine.create();
  world = engine.world;

  ground = new Ground();


  Boxes1 = new Boxes(450,450,50,50);
  console.log(Boxes1);
  Boxes2 = new Boxes(450,400,50,50);
  Boxes3 = new Boxes(450,350,50,50);
  Boxes4 = new Boxes(450,300,50,50);
  Boxes5 = new Boxes(450,250,50,50);
  Boxes6 = new Boxes(450,200,50,50);
  Boxes7 = new Boxes(450,150,50,50);
  
  Boxes8 = new Boxes(530,235,50,50);
  Boxes9 = new Boxes(530,235,50,50);
  Boxes10 = new Boxes(530,235,50,50);
  Boxes11 = new Boxes(530,235,50,50);
  Boxes12 = new Boxes(530,235,50,50);
  //level three
  Boxes13 = new Boxes(530,190,50,50);
  Boxes14 = new Boxes(610,235,50,50);
  Boxes15 = new Boxes(610,235,50,50);
  Boxes16 = new Boxes(610,235,50,50);
  Boxes17 = new Boxes(610,235,50,50);
  Boxes18 = new Boxes(610,235,50,50);
  Boxes19 = new Boxes(610,235,50,50);
  Boxes20 = new Boxes(610,235,50,50);
  Boxes21 = new Boxes(610,235,50,50);

  superman =  new Superman(100,250,20,20);
  monster = new Monster(800,250,100,100);
  


}

function draw() {
  background(BackgroundImg);
Engine.update(engine);
text("x:"+mouseX+";y:"+mouseY,mouseX,mouseY);

ground.display();
strokeWeight(2);
  stroke(15);
  Boxes1.display();
  Boxes2.display();
  Boxes3.display();
  Boxes4.display();
  Boxes5.display();
  Boxes6.display();
  Boxes7.display();
  Boxes8.display();
  Boxes9.display();
  Boxes10.display();
  Boxes11.display();
  Boxes12.display();
  Boxes13.display();
  Boxes14.display();
  Boxes15.display();
  Boxes16.display();
  Boxes17.display();
  Boxes18.display();
  Boxes19.display();
  Boxes20.display();
  Boxes21.display();
  superman.display();
  monster.display();
 
}

function mouseDragged(){


  Matter.Body.setPosition(superman.body, {x: mouseX , y: mouseY});


}

