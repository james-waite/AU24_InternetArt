let images = [];

function preload() {
    // loading one image:
    // let imageDemo = loadImage('./assets/demo_1.jpg');
    for(i=0; i < 3; i++) {
        images[i] = loadImage('./assets/demo_' + i + '.jpg');
    }
    console.log(images)
}

function setup() {
    const myCanvas = createCanvas(600, 400);
    myCanvas.parent('myCanvas');
}

function draw() {
    background(55);

    image(images[0], 100, 100, 40, 60);
    image(images[1], 150, 160, 40, 60);
    image(images[2], 200, 220, 40, 60);

    coordinateHelper();
}

function coordinateHelper() {
    push();
    fill(255);
    // text('hello world', x, y);
    text('x: ' + mouseX + ', y: ' + mouseY, mouseX, mouseY);
    pop();
}