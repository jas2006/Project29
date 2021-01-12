const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2,box3,box4,box5;
var backgroundImg,platform;
var ball, slingShot;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(width/2,390,1200,20);
    slingshot = new SlingShot(ball.body,{x:200, y:50});
    ball = new Ball(200,50)
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
 
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    slingshot.display();
    ball.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
