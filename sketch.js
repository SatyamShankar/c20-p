

var mouse,mouseImg,cat,catImg,gardenImg,garden,catI




function preload() {
    //load the images here
catImg=loadAnimation("cat1.png")
gardenImg=loadImage("garden.png")
mouseImg=loadAnimation("mouse1.png")
catI=loadAnimation("cat2.png","cat3.png")
cat1=loadAnimation("cat4.png")
mouse1=loadAnimation("mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     garden=createSprite(500,400,50,50)
   garden.addImage("b",gardenImg)
   
   cat=createSprite(800,600,50,50)
   cat.addAnimation("c",catImg)
   cat.scale=0.2

  mouse=createSprite(400,600,50,50)
  mouse.addAnimation("d",mouseImg)
  mouse.scale=0.2

  mouse.setCollider("rectangle",0,0,60,50)
mouse.debug=true

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

if(keyDown("left")){
  cat.x=cat.x-5
  cat.addAnimation("m",catI)
  cat.changeAnimation("m")
}

if (mouse.isTouching(cat)) {
    cat.addAnimation("l",cat1)
    cat.changeAnimation("l")
    mouse.addAnimation("g",mouse1)
    mouse.changeAnimation("g")
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
