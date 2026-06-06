// ============================================================
// Week 4 Example 2: Full Rock Paper Scissors (Best of 3)
// ============================================================

// ------------------------------------------------------------
// ABOUT THIS FILE
// This project is split across three JavaScript files:
//
//   sketch.js — p5.js entry point: setup(), draw(), mousePressed()
//   game.js   — game logic: choices, scores, round tracking
//   scenes.js — drawing helpers: blobs, buttons, screens
//
// All three files are loaded in index.html in that order.
// Variables and functions defined in one file are available
// in all others because they share the same global scope.
// ------------------------------------------------------------

// ------------------------------------------------------------
// GAME STATES
// The game moves through these states in order.
// Storing states as constants prevents typos — if you mistype
// STATE_PLAY, JavaScript will throw an error instead of
// silently using the wrong string.
// ------------------------------------------------------------

let currentScene = "home";
const buttonW = 250;
const buttonH = 52;
const gap = 100;

const leftX = 800 / 2 - (buttonW / 2 + gap / 2);
const rightX = 800 / 2 + (buttonW / 2 + gap / 2);
const buttonY = 250;

function setup() {
  createCanvas(800, 450);
}

function draw() {
  background("#ffd4e1");
  
  if (currentScene === "home") {
    drawHomeScreen();
  } else if (currentScene === "1") {
    drawScene1();
  } else if (currentScene === "2") {
    drawScene2();
  } else if (currentScene === "3") {
    drawScene3();
  } else if (currentScene === "4") {
    drawScene4();
  } else if (currentScene === "5") {
    drawScene5();
  } else if (currentScene === "6") {
    drawScene6();
  } else if (currentScene === "7") {
    drawScene7();
  } else if (currentScene === "8") {
    drawScene8();
  } else if (currentScene === "9") {
    drawScene9();
  } else if (currentScene === "10") {
    drawScene10();
  } else if (currentScene === "11") {
    drawScene11();
  } else if (currentScene === "12") {
    drawScene12();
  } else if (currentScene === "13") {
    drawScene13();
  } else if (currentScene === "14") {
    drawScene14();
  } else if (currentScene === "15") {
    drawScene15();
  }
}

function mousePressed() {
  if (currentScene === "home") {
   if (isMouseOver(leftX, buttonY, buttonW, buttonH) || isMouseOver(rightX, buttonY, buttonW, buttonH)) {
     currentScene = "1";
   }
  if (isMouseOver(rightX, buttonY, buttonW, buttonH) || isMouseOver(rightX, buttonY, buttonW, buttonH)) {
     currentScene = "2";
   }
 }
}

function drawButton(x, y, w, h, label, isHovered) {
 push();
 rectMode(CENTER); // x, y are the centre of the rectangle


 // Button background — lighter colour when hovered
 fill(isHovered ? color("#d97593") : color("#b3345a"));
 stroke(isHovered ? color("#eb91ac") : color("#9c1940"));
 strokeWeight(2);
 rect(x, y, w, h, 8); // rounded corners


 // Button label — centred inside the button
 fill(255);
 noStroke();
 textAlign(CENTER, CENTER);
 textSize(18);
 text(label, x, y);


 pop();
}

function isMouseOver(x, y, w, h) {
 return (
   mouseX > x - w / 2 &&
   mouseX < x + w / 2 &&
   mouseY > y - h / 2 &&
   mouseY < y + h / 2
 );
}

function drawHomeScreen() {
 // Title
 fill("#d96c8d");
 textAlign(CENTER);
 textSize(25);
 textFont("monospace");
 textStyle(BOLD);
 text("You're on UWaterloo campus, what should you do?", width / 2, 180);

 // Start button
 drawButton(
   leftX,
   buttonY,
   buttonW,
   buttonH,
   "Study at DC Library",
   isMouseOver(leftX, buttonY, buttonW, buttonH),
 );

 drawButton(
   rightX,
   buttonY,
   buttonW,
   buttonH,
   "Exercise at PAC",
   isMouseOver(rightX, buttonY, buttonW, buttonH),
 );
}
