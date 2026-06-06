function drawScene11() {
 // Title
 fill("#d96c8d");
 textAlign(CENTER);
 textSize(25);
 textFont("monospace");
 textStyle(BOLD);
 text("You forgot you had a club meeting, what will you do?", width / 2, 180);

 // Start button
 drawButton(
   leftX,
   buttonY,
   buttonW,
   buttonH,
   "Run to the meeting room",
   isMouseOver(leftX, buttonY, buttonW, buttonH),
 );

 drawButton(
   rightX,
   buttonY,
   buttonW,
   buttonH,
   "Wait and take the nearest bus",
   isMouseOver(rightX, buttonY, buttonW, buttonH),
 );
}