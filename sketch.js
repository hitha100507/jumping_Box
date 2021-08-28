var canvas;
var surface1, surface2, surface3, surface4;
var box;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(750, 585, 190, 20); 
    surface1.shapeColor = "yellow";
    
    surface2 = createSprite(530, 585, 190, 20);
    surface2.shapeColor = "maroon";

    surface3 = createSprite(310, 585, 190, 20);
    surface3.shapeColor = "green";

    surface4 = createSprite(80, 585, 200, 20);
    surface4.shapeColor = "blue";

    //create box sprite and give velocity
    box = createSprite(random(20,750), 300, 40,40);
    box.velocityY = 10;
    box.shapeColor = "white";

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    

    //add condition to check if box touching surface and make it box.
    if( surface1.isTouching(box) && box.bounceOff( surface1 )){ 
        box.shapeColor = "yellow";
     }
    if( surface2.isTouching(box) && box.bounceOff( surface2 )){ 
        box.shapeColor = "maroon";
     }
    if( surface3.isTouching(box) && box.bounceOff( surface3 )){ 
        box.shapeColor = "green";
     }
    if( surface4.isTouching(box) && box.bounceOff( surface4 )){ 
        box.shapeColor = "blue";
     }
    
    drawSprites();
    createEdgeSprites();
}

