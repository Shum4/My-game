var spaghetti;
var burger;
var hotdog;
var milkshake;
var pizza;
var spaghettiPlain;
var ketchup;
var seasoning;
var plate;

var spaghettiImg;
var burgerImg;
var milkshakeImg;
var hotdogImg;
var pizzaImg;
var spaghettiPlainImg;
var ketchupImg;
var seasoningImg;
var plateImg;

function preload(){
  spaghettiImg=loadImage("Spaghetti/spaghetti.png");
  burgerImg=loadImage("Burger/burger.jpg");
  milkshakeImg=loadImage("Milkshake/milkshake.png");
  hotdogImg=loadImage("Hotdog/hotdog.png");
  pizzaImg=loadImage("Pizza/pizza.jpg");
  spaghettiPlainImg=loadImage("Spaghetti/spaghetti plain.png");
  ketchupImg=loadImage("Spaghetti/katchup.png");
  seasoningImg=loadImage("Spaghetti/seasoning.jpg")
  plateImg=loadImage("plate.png");
}

function setup() {
  createCanvas(800, 800);
  
  
  plate=createSprite(400,400,40,40);
  plate.addImage(plateImg);
  plate.scale=0.4;
  
  spaghetti=createSprite(400,200,40,40);
  spaghetti.addImage(spaghettiImg);
  spaghetti.scale=0.5;
  
  spaghettiPlain=createSprite(400,700,40,40);
  spaghettiPlain.addImage(spaghettiPlainImg);
  spaghettiPlain.scale=0.2;
  
  
  ketchup=createSprite(200,700,40,40);
  ketchup.addImage(ketchupImg);
  ketchup.scale=0.1;
  
  
  seasoning=createSprite(600,700,40,40);
  seasoning.addImage(seasoningImg);
  seasoning.scale=0.1;
  

}

function draw() {
  background(220);

  
  if(mousePressedOver(ketchup)){
    ketchup.x=mouseX;
    ketchup.y=mouseY;
    if(ketchup.y<400){
       ketchup.x=330;
       ketchup.y=400;
       ketchup.scale=0.07
       }
  }
  
  if(mousePressedOver(spaghettiPlain)){
    spaghettiPlain.x=mouseX;
    spaghettiPlain.y=mouseY;
    if(spaghettiPlain.y<400){
       spaghettiPlain.x=400;
       spaghettiPlain.y=400;
       spaghettiPlain.scale=0.1;
       }
  }
  if(mousePressedOver(seasoning)){
    seasoning.x=mouseX;
    seasoning.y=mouseY;
    if(seasoning.y<400){
       seasoning.x=470;
       seasoning.y=400;
       seasoning.scale=0.07;
       }
    
  }
  if(ketchup.x===330 && ketchup.y===400
    && seasoning.x===470 && seasoning.y===400
    && spaghettiPlain.x===400 && spaghettiPlain.y===400){
     ketchup.destroy();
     seasoning.destroy();
     spaghettiPlain.destroy();
     spaghetti.x=400;
     spaghetti.y=360;
  }
  
  drawSprites();
  
}
 


