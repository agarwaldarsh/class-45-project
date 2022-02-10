var playerRocket; 
var compRocket;
var playerRocketImg;
var compRocketImg;
var spaceImg;
var moon;
var moonImg; 
var asteroids; 
var asteroidsImg;

function preload(){
  //loading all the images 
  playerRocketImg=loadImage("rocket edited.png")
  compRocketImg=loadImage("rocket edited.png")
  spaceImg=loadImage("space.png")
  moonImg=loadImage("Moon2.png")
  asteroidsImg=loadImage("asteroid.png")
}

function setup() {
  createCanvas(500,600);
  //creating player rocket 
  playerRocket=createSprite(400, 550, 50, 50);
  playerRocket.addImage("player",playerRocketImg)
  playerRocket.scale=0.5

  //creating computer rocket 
  compRocket=createSprite(100,550,150,150)
  compRocket.addImage("computer",compRocketImg)
  compRocket.scale=0.5

  //creating moon 
  moon=createSprite(250,50,200,200)
  moon.addImage("goal",moonImg)

  drawSprites()
}

function draw() {
  background(spaceImg);
  spawnAsteroid() 
  
  if(keyDown("UP_ARROW")){
    compRocket0=compRocket-10
  }
  if (keyDown("UP_ARROW")) {
    playerRocket.positionY -= 10;
  }
  if (keyIsDown(LEFT_ARROW)) {
    playerRocket.positionX -= 10;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    playerRocket.positionX += 10;
  }
  if (keyDown(DOWN_ARROW)) {
    playerRocket.positionY += 10;
  }

   
  drawSprites();
}
function spawnAsteroid(){
  //spawning asteroids at random places 
  if (frameCount % 60 === 0) {
    var asteroid = createSprite(600,120,40,10);
    asteroid.y = Math.round(random(50,550));
    asteroid.x =Math.round(random(100,300))
    asteroid .addImage(asteroidsImg);
    asteroid.scale = 0.02;
    asteroid.velocityX= -3
  
}
if (frameCount % 60 === 0) {
  var asteroid = createSprite(600,120,40,10);
  asteroid.y = Math.round(random(50,550));
  asteroid.x =Math.round(random(100,300))
  asteroid .addImage(asteroidsImg);
  asteroid.scale = 0.02;
  asteroid.velocityX= 3

}
}
function handleRocket(){
  if (keyIsDown(UP_ARROW)) {
    playerRocket.positionY -= 10;
  }
  if (keyIsDown(LEFT_ARROW)) {
    playerRocket.positionX -= 10;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    playerRocket.positionX += 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    playerRocket.positionY += 10;
  }
}