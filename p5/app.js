let r, g, b;
let speedX = 5;
let speedY = 6;
let positionX = 1;
let positionY = 150;

function setup() {
    const myCanvas = createCanvas(600, 400);
    myCanvas.parent('myCanvas');
    //        red, green, blue
}

function draw() {
    background(55);

    //  or: || and: && 
    if(positionX >= width - 40 || positionX < 0) {
        // speedX *= -1;
        speedX = speedX * -1;
    }
    if(positionY > height - 60 || positionY < 0) {
        speedY = speedY * -1;
    }

    if(speedX > 0) {
        r = 250;
        g = 50;
        b = 25;
    } else {
        r = 0;
        g = 225;
        b = 175;
    }

    // positionX += speedX;
    positionX = positionX + speedX;
    positionY = positionY + speedY;
    
    strokeWeight(10);
    line(0, 0, width, height);
    
    stroke(0, 0, 255);
    strokeWeight(5);
    fill(r, g, b);
    rect(positionX, positionY, 40, 60);
    
    noFill();
    strokeWeight(1);
    stroke(255, 0, 0);
    ellipse(520, 275, 40, 30);
    ellipse(350, 275, 40, 35);
    ellipse(240, 275, 40, 40);
    ellipse(180, 275, 40, 45);

}