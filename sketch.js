var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,200,30,10);
  bullet.velocityX = speed;
  bullet.shapeColor = color("white");

  wall = createSprite(1200,200,60,300);
  wall.shapeColor = color(80,80,80);
 
}

function draw() {

  background(0,0,0); 

  hasCollided();

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10)
    {
       wall.shapeColor = color(255,0,0);
    }

    if(damage<10)
    {
       wall.shapeColor = color(0,255,0);
    }
  }
  
  hasCollided();
  
  drawSprites();
  
}

function hasCollided(bullet,wall)
{
     bulletRightEdge = bullet.x + bullet.width;
     wallLeftEdge = wall.x;

   if((bulletRightEdge)>(wallLeftEdge))
   {
     return true;
   }
   
   return false;
   
}