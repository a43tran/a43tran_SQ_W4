function drawScene9() {
 fill("#d96c8d");
 textAlign(CENTER);
 textSize(25);
 textFont("monospace");
 textStyle(BOLD);
 text("What are you going to study today?", width / 2, 180);

 drawButton(
   leftX,
   buttonY,
   buttonW,
   buttonH,
   "GBDA 311 Midterm",
   isMouseOver(leftX, buttonY, buttonW, buttonH),
 );

 drawButton(
   rightX,
   buttonY,
   buttonW,
   buttonH,
   "GBDA 205 Quiz",
   isMouseOver(rightX, buttonY, buttonW, buttonH),
 );
}