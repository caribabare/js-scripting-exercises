/*
UoL BSc CS - Game part 2. Introduction to Programming
*/

var gameChar_x = 0;
var gameChar_y = 0;

function setup()
{
	createCanvas(400, 600);
    
}

function draw()
{
	background(255);

	//Standing, facing frontwards

	stroke(100);
	noFill();
	rect(20, 60, 50, 80);
	noStroke();
	fill(0);
	text("1. standing front facing", 20, 160);

	gameChar_x = 45;
	gameChar_y = 137;
	//Add your code here ...
    
    // ** Start of Solution **
    
    // ------------------------- Left leg
    stroke(0);
    strokeWeight(2);
    let skin = color(255,228,196);
    fill(skin);
    rect(gameChar_x - 15, gameChar_y - 27, 12, 27);
    
    // ------------------------- Right leg
    rect(gameChar_x + 3, gameChar_y - 27, 12, 27);
    
    // ------------------------- Left Arm
    rect(gameChar_x -22, gameChar_y - 45, 7, 15);
    
    // ------------------------- Right Arm
    rect(gameChar_x +15, gameChar_y - 45, 7, 15);
    
    // ------------------------- Head
    ellipse(gameChar_x, gameChar_y - 65, 22, 22);
    
    // ------------------------- Shorts
    fill(0);
    rect(gameChar_x -15, gameChar_y - 36, 30, 9);
    // ------------------------- Cap
    arc(gameChar_x, gameChar_y - 67, 22, 8, PI, 2* PI, PIE);

    
    // ------------------------- Trunk - Polka Jersey :)
    nofill();
    rect(gameChar_x -15, gameChar_y - 54, 30, 18); // Jersey
    rect(gameChar_x -22, gameChar_y - 54, 7, 9); // left Shoulder
    rect(gameChar_x +15, gameChar_y - 54, 7, 9); // Right Shoulder
    
    noStroke();
    fill(255, 0, 255);
    ellipse(gameChar_x - 10, gameChar_y - 49, 4, 4); // Top Red Point
    ellipse(gameChar_x, gameChar_y - 49, 4, 4);
    ellipse(gameChar_x + 10, gameChar_y - 49, 4, 4);
    
    ellipse(gameChar_x - 5, gameChar_y - 41, 4, 4); // Down Points
    ellipse(gameChar_x + 5, gameChar_y - 41, 4, 4);
    
    ellipse(gameChar_x - 19, gameChar_y - 49, 4, 4); // Left & Right Points
    ellipse(gameChar_x + 19, gameChar_y - 49, 4, 4);


	//Jumping facing forwards
	stroke(100);
	noFill();
	rect(220, 60, 50, 80);
	noStroke();
	fill(0);
	text("2. jumping facing forwards", 220, 160);

	gameChar_x = 245;
	gameChar_y = 137;
	//Add your code here ...


	//Walking, turned left
	stroke(100);
	noFill();
	rect(20, 260, 50, 80);
	noStroke();
	fill(0);
	text("3. Walking left", 20, 360);

	gameChar_x = 45;
	gameChar_y = 337;
	//Add your code here ...


	//Walking, turned right
	stroke(100);
	noFill();
	rect(220, 260, 50, 80);
	noStroke();
	fill(0);
	text("4. Walking right", 220, 360);

	gameChar_x = 245;
	gameChar_y = 337;
	//Add your code here ...


	//Jumping right
	stroke(100);
	noFill();
	rect(20, 460, 50, 80);
	noStroke();
	fill(0);
	text("5. Jumping to the right", 20, 560);

	gameChar_x = 45;
	gameChar_y = 537;
	//Add your code here ...


	//Jumping to the left
	stroke(100);
	noFill();
	rect(220, 460, 50, 80);
	noStroke();
	fill(0);
	text("6. Jumping to the left", 220, 560);

	gameChar_x = 245;
	gameChar_y = 537;
	//Add your code here ...

}
