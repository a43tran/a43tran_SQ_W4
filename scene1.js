function setup() {
  createCanvas(800, 450);
}

function drawScene1() {
 fill(255);
 textAlign(CENTER);
 textSize(52);
 text("Hello", width / 2, 140);

 // Subtitle
 fill(160);
 textSize(16);
 text("Rock. Paper. Scissors.", width / 2, 185);
 text("Best of 3 rounds wins.", width / 2, 210);

 // Start button
 drawButton(
   leftX,
   buttonY,
   buttonW,
   buttonH,
   "Start Game",
   isMouseOver(leftX, buttonY, buttonW, buttonH),
 );

 drawButton(
   rightX,
   buttonY,
   buttonW,
   buttonH,
   "Start Game",
   isMouseOver(rightX, buttonY, buttonW, buttonH),
 );
}