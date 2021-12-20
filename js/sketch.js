const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Render = Matter.Render;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var launcher;
var polygon_img,polygon;
function preload(){
  //polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //nivel uno
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //nivel dos
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //nivel tres
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //parte superior
  block16 = new Block(390,155,30,40);

    //nivel uno segunda base
    block17 = new Block(680,190,30,40);
    block18 = new Block(710,190,30,40);
    block19 = new Block(740,190,30,40);
    block20 = new Block(670,190,30,40);
    block21 = new Block(700,190,30,40);
    //nivel dos segunda base
    block22 = new Block(680,85,30,40);
    block23 = new Block(710,85,30,40);
    block24 = new Block(740,85,30,40);
    //parte superior segunda base
    block25 = new Block(710,45,30,40);

    polygon = new Polygon(50,200,20);

    launcher = new Launcher(polygon.body,{x:100, y:200});
  
Engine.run(engine);
}
function draw() {
  background(56,44,44); 

  Engine.update(engine);

  polygon.display();
  launcher.display();

  textSize(20);
  fill("lightyellow");

  ground.display();
  stand1.display();
  stand2.display();

  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();

  fill("skyblue");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  fill("turquoise");
  block22.display();
  block23.display();
  block24.display();
  fill("pink");
  block25.display();


}



function mouseDragged (){
  Matter.Body.setPosition(polygon.body,{ x:mouseX, y:mouseY})
}
//crea aquí la función mouseReleased 
function mouseReleased (){
  launcher.fly();
}
