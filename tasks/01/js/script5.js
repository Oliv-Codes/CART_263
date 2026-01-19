"use strict";


let counter = 0; // counter variable starting at 0

let sky = {
    r: 30,
    g: 10,
    b: 110,
};

// square object holding properties (orange square)
let square = {
    x: 50,
    y: 50,
    w: 120,
    h: 120,
    color: [250, 126, 20],
    hoverColor: [255, 190, 110]
};

// ellipse variables
let radius = 20; // base radius for ellipse
let ellipseAlpha = 20; // starting alpha for ellipse

function setup() {
    createCanvas(645, 645);
    ellipseMode(CENTER);
}

function draw() {
    // refresh background each frame so hover highlights update
    background(sky.r, sky.g, sky.b);

    // draw the orange square (will use hover color if mouse is over it)
    displaySquare();

    // draw ellipses in a single while loop according to counter
    if (counter >= 1 && counter <= 10) {
        let i = 0;
        // use local variables to increment size and alpha per iteration
        let curRadius = radius;
        let curAlpha = ellipseAlpha;
        while (i < counter) {
            noStroke();
            fill(255, curAlpha); // white with alpha
            ellipse(width / 2, height / 2, curRadius * 2, curRadius * 2);

            // increment for next ellipse
            i++;
            curRadius += 12; // make each new circle slightly larger
            curAlpha = min(255, curAlpha + 20); // increase alpha but cap at 255
        }
    }
}

// renders the square using its object properties
function displaySquare() {
    push();
    noStroke();
    if (checkCollisionWithSquare()) {
        fill(square.hoverColor[0], square.hoverColor[1], square.hoverColor[2]);
    } else {
        fill(square.color[0], square.color[1], square.color[2]);
    }
    rect(square.x, square.y, square.w, square.h);
    pop();
}

// returns true if mouse is inside the square, false otherwise
function checkCollisionWithSquare() {
    return (
        mouseX >= square.x &&
        mouseX <= square.x + square.w &&
        mouseY >= square.y &&
        mouseY <= square.y + square.h
    );
}

// increment counter when the mouse is clicked inside the square
function mousePressed() {
    if (checkCollisionWithSquare()) {
        counter++;
    }
}

