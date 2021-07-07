const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var ground, miniG
var block1,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,
block16

var block17,block18,block19,block20,block21,block22,block23,block24,block25
var hexa_image, hexa
var bg

var chain
var vase,vaseImg
var girl,girlImg
var girl2, girlImg2
var girl3, girlImg3
var mom,momImg

function preload() {
  
  hexa_image=loadImage("wb.png")
vaseImg=loadImage("vase.png")
  girlImg = loadImage("girl_2.png")
  girlImg2 = loadImage("girl_1.png")
  girlImg3 = loadImage("girl_3.png")
  bg = loadImage("bg1.jpg")
  momImg = loadImage("mom.png")
  
}



function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;
 
  vase= createSprite(335,3500)
  vase.addImage(vaseImg)
  vase.scale=0.5

  girl= createSprite(900,470)
  girl.addImage(girlImg)

  girl2= createSprite(900,470)
  girl2.addImage(girlImg2)
  girl2.visible=false
  girl2.scale=0.8

  girl3= createSprite(900,470)
  girl3.addImage(girlImg3)
  girl3.visible=false
  girl3.scale=0.35

  mom= createSprite(150,400)
  mom.addImage(momImg)
  mom.visible=false
  mom.scale=0.6






    ground= new Ground(600,580,1200,20)
    //miniG= new Ground(640,250,220,20)
    miniG2= new Ground(330,450,250,20)

    block1=new Block(330,425,50,50)
    block2=new Block1(320,425,50,50)
    block3=new Block2(320,425,50,50)
    block4=new Block3(330,425,50,50)
    block5=new Block4(360,425,50,50)
    block6=new Block5(330,425,50,50)
    block7=new Block6(360,425,50,50)



  

    hexa=Bodies.circle(460,220,20)
    World.add(world,hexa)

    chain=new Chain(hexa,{x:940,y:420})

    


    Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(bg);
  fill("yellow")
  ground.display()
  //miniG.display()
  miniG2.display()
  fill("skyblue")
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  


  fill("brown")
  rect(250,510,20,120)

  fill("brown")
  rect(400,510,20,120)
 
 fill("lightblue")
  chain.display()

  

  fill("gold")
    imageMode(CENTER)
    image(hexa_image,hexa.position.x,hexa.position.y,40,40)
  

 
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(hexa, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  girl.visible=false
  girl2.visible=true
  chain.fly();
}




 

