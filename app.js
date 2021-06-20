var START = 0;
var PLAY = 1;
var INS = 2;
var gameState = START;


var form, level = 1;

var rocketImg , bg , bulletImg;
var rocket,bullet;

var continue1 , continue2;




function preload(){
    rocketImg = loadImage("rocket.png");
    bulletImg = loadImage("bullet1.png");
    bg = loadImage("bg.jpg");
}
function setup(){
    createCanvas(windowWidth-5,windowHeight-10);
    form = new Form();

    
        rocket = createSprite(width/2,height-100,50,50);
        rocket.addImage(rocketImg);
        rocket.scale =0.1;

        
            bullet = createSprite(rocket.x , rocket.y - 50 , 20);
            bullet.addImage(bulletImg);
            bullet.velocityY = -50;
            bullet.scale = 0.1;
       
    
}
function draw(){

    if(gameState === START){
        background(37,41,116);
        form.display();
    }

    if(gameState === INS){
        clear();
        form.hide();
        background(37,41,116);

        fill("yellow");
        textSize(100);
        text("Story: " ,20 , 100);

        fill("white");
        textSize(25);
        text("Moon's aliens has sent aliens spaceship and asteroids to destroy our Earth." ,100 , 200);
        text("You are the hero of our planet you should save our planet and our people by destroying these." ,100 , 250);
        

        fill("yellow");
        textSize(100);
        text("Hints: " ,20 , 400);

        fill("white");
        textSize(25);
        text("1) Use Left, Right, Up, Down arrow to control the rocket." ,100 , 500);
        text("2) This rocket is of advanced technology it keeps shooting bullets constanly and automatically." ,100 , 550);

        continue1 = createButton('Continue');
        continue1.position(1100,height-80);
        continue1.style("background","transparent");
        continue1.style("width","200px");
        continue1.style("height","50px");
        continue1.style("font-size","35px");
        continue1.style("color","white");

        continue1.mousePressed(() => {
            continue1.hide();
        })
    }



    if(gameState === PLAY){
        background(bg);
        form.hide();

        textSize(25);
        fill(255);

        text("Level " + level , 50,50);

        
        // Code for key controls
        if(keyIsDown(37)){
            rocket.x = rocket.x - 20;
        }
        if(keyIsDown(39)){
            rocket.x = rocket.x + 20;
        }
        if(keyIsDown(38)){
            rocket.y = rocket.y - 20;
        }
        if(keyIsDown(40)){
            rocket.y = rocket.y + 20;
        }
        

        // Code for making the rocket look like that it is not crossing screen
        if(rocket.x < 0){
            rocket.x = 15;
        }
        if(rocket.x > width){
            rocket.x = width-15;
        }
        if(rocket.y > 635){
            rocket.y = 635;
        }
        if(bullet.y < -50){
            bullet.y = rocket.y - 50;
            bullet.x = rocket.x;
        }

     

        drawSprites();
    }
    

}