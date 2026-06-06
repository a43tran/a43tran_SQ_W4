function drawScene10() {
 // Title
 fill("#d96c8d");
 textAlign(CENTER);
 textSize(25);
 textFont("monospace");
 textStyle(BOLD);
 text("The library is too full, where will you go?", width / 2, 180);

 // Start button
 drawButton(
   leftX,
   buttonY,
   buttonW,
   buttonH,
   "SLC Study Lounge",
   isMouseOver(leftX, buttonY, buttonW, buttonH),
 );

 drawButton(
   rightX,
   buttonY,
   buttonW,
   buttonH,
   "QNC Upstairs",
   isMouseOver(rightX, buttonY, buttonW, buttonH),
 );
}