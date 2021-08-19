var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit moving
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

//spawn apples
function createApples(){
apple = createSprite(random(50,350),40,10,10);
apple.scale = 0.07;
apple.addImage(appleImg);
apple.velocityY = 3;
}
//spawn green leaves
function createLeaves(){
leaf = createSprite(random(50,350),40,10,10);
leaf.scale = 0.05;
leaf.addImage(leafImg);
leaf.velocityY = 3;
}

function createOrange(){
orange = createSprite(random(50,350),40,10,10);
orange.scale = 0.05;
orange.addImage(orangeImg);
orange.velocityY = 3;
}
function draw() {
  background(0);
rabbit.x = World.mouseX;
   
  drawSprites();
  
  var select_sprite = Math.round(random(1,3));

  if(frameCount % 80 == 0){
    if (select_sprite == 1){
      createApples();
    }
    else if(select_sprite == 2){
      createLeaves();
    }
     else{
    createOrange();
     } 
    }
  }
