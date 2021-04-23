const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var ground,me;

function preload(){
ground_image=loadImage("space1.png","space2.webp");

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
   
    ground = createSprite(300,300,300,300);
    
    me = new heroship(200,250,30,30);
 

}

function draw(){
    background(ground_image);
    background.velocityY=6;
    if (background.y>400){
      background.y=300;
      
    Engine.update(engine);
    
    me.display();
    ground.display();
}
}