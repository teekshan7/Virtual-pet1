var dog,dogHappy,dogImage,happyDogImage,database,foodS=20,foodStock
function preload()
{
  dogImage=loadImage("images/dogImg.png")
  happyDogImage=loadImage("images/dogImg1.png")
  //load images here
}

function setup() {
  createCanvas(500,500);
  database=firebase.database()
  dog=createSprite(250,300,150,150)
  dog.addImage("dog",dogImage)
  dog.scale=0.2

  foodStock=database.ref('food')
  foodStock.on("value",readStock)
}
function readStock(data){
foodS=data.val()
}


function draw() {  

  background(46,139,87)
  drawSprites();
  //add styles here

  if(keyWentDown(UP_ARROW)){
    writeStocks(foodS)
    dog.addImage("dog",happyDogImage)
  }
text("foodRemaing"+foodS,170,200)
}

function writeStocks(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
  database.ref('/').update({
    food:x
 })
}

