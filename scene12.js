function drawScene12() {
 // Title
 fill("#d96c8d");
 textAlign(CENTER);
 textSize(25);
 textFont("monospace");
 textStyle(BOLD);
 text("What will you order?", width / 2, 180);

 // Start button
 drawButton(
   leftX,
   buttonY,
   buttonW,
   buttonH,
   "Special Rice Noodle Soup",
   isMouseOver(leftX, buttonY, buttonW, buttonH),
 );

 drawButton(
   rightX,
   buttonY,
   buttonW,
   buttonH,
   "Shrimp Rolls",
   isMouseOver(rightX, buttonY, buttonW, buttonH),
 );
}