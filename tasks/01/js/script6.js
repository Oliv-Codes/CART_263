"use strict";
function setup() {
    createCanvas(640, 640);
    textSize(textObj.size);
    fill(...textObj.color);
}

// spacing constants
const H_SPACING = 20; // horizontal spacing per i
const V_SPACING = 20; // vertical spacing per i

// text object for the centered string
const textObj = {
    str: "test",
    size: 28,
    color: [255, 255, 255]
};

// sky color
const sky = {
    r: 30,
    g: 10,
    b: 110
};



function draw() {
    // draw background sky
    drawSky();

    // draw centered text object (white, size 28)
    push();
    fill(...textObj.color);
    textAlign(CENTER, CENTER);
    text(textObj.str, width / 2, height / 2);
    pop();

    // First for-loop: repeat 10 times (0..9) in upper-left
    // output i and offset x by i * H_SPACING (i==1 -> 20, i==2 -> 40)
    push();
    fill(255);
    textAlign(LEFT, TOP);
    for (let i = 0; i < 10; i++) {
        const displayText = String(i);
        const x = i * H_SPACING; // mapping: i==1 -> 20, i==2 -> 40
        const y = 0; // upper-left row
        text(displayText, x, y);
    }
    pop();

    // Second for-loop: repeat 15 times starting at 15 down to 1, under the zero
    // output i and offset y by i * V_SPACING (i==1 -> 20, i==2 -> 40)
    push();
    fill(255);
    textAlign(LEFT, TOP);
    for (let i = 15; i >= 1; i--) {
        const displayText = String(i);
        const x = 0; // same x as the zero from first loop (left edge)
        const y = i * V_SPACING; // mapping: i==1 -> 20, i==2 -> 40
        text(displayText, x, y);
    }
    pop();
}

function drawSky() {
    background(sky.r, sky.g, sky.b);
}
