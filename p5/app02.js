let array = ['hello', 'world', 'first', 'array', 'fifth', 'sixth', 'seventh'];

let lineHeight = [150, 245, 56, 3, 172, 42];

let colors = ['#00ff88'];

function setup() {
    const myCanvas = createCanvas(600, 400);
    myCanvas.parent('myCanvas');
    // console.log(array)
    // console.log(array.length)
    // starting value - exit condition - increment value
    
    for(i=0; i<array.length; i++) {
        console.log(array[i]);
    }
    background(55);
    
    stroke(colors[0]); // i = i + 10
    strokeWeight(5);
    for(let i = 50; i<550; i+=10){
        for(let j = 0; j<lineHeight.length; j++) {
            line(i, 50, i, lineHeight[j]);
        }
    }
}

function draw() {
    
}