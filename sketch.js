var ball,paddle;
var ballimg,paddleimg,bg;
var gameover,gamevoerimg,gosound;
var bounce,batsound;
function preload() {
  /* preload your images here of the ball and the paddle */
  ballimg=loadImage("ball.png")
  paddleimg=loadImage("paddle.png")
  bg=loadImage("background.jpg")
  gameoverimg=loadImage("glitch-game-background_23-2148090006.jpg")
  batsound=loadSound("hit.mp3")
  bouncesound=loadSound("bounce.mp3")
  gosound=loadSound("zapsplat_human_male_voice_says_game_over_001_15726.mp3")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
   /* creating the Ball Sprite and the Paddle Sprite */
  paddle=createSprite((windowWidth/4)*3,windowHeight/2)
  paddle.scale=0.5
  ball=createSprite(windowWidth/4,windowHeight/2)
  ball.scale=0.025
  /* assignimg the images to the sprites */
  ball.addImage("balli",ballimg);
  paddle.addImage("paddlei",paddleimg);

  /* giving the ball an initial velocity of 9 in the X direction */
  ball.velocityX=9;
 // declaring variables for gamestate

}

function draw() {
  background(bg);
  paddle.setVelocity(0,0)
  
  /* creating Edge Sprites here */
  edges=createEdgeSprites()
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(edges[0])
  ball.bounceOff(edges[2])
  ball.bounceOff(edges[3])
   

       if  (ball.bounceOff(paddle))
 {
   randomVelocity()
  batsound.play()
 }
    if  (ball.bounceOff(edges[0]))
 {
   randomVelocity()
   bouncesound.play()
 }
  
        if  (ball.bounceOff(edges[2]))
 {
   randomVelocity()
   bouncesound.play()   
 }
        if  (ball.bounceOff(edges[3]))
 {
   randomVelocity()
   bouncesound.play()   
 }

  paddle.collide(edges)
    
  if(keyDown(UP_ARROW))
  {
    paddle.velocityY=-12
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.velocityY=12
  }
  drawSprites();
  if (ball.x>windowWidth){
    gamestate=1
  }
if (ball.x===windowWidth)
{
     gameover=createSprite(windowWidth/2,windowHeight/2)
gameover.addImage("gameoveri",gameoverimg)
  gameover.width=windowWidth;
gameover.height=windowHeight;
  gosound.play(false)
} 
}

function randomVelocity()
{
  ball.setVelocity(random(-12,-4),random(-12,12))
}

