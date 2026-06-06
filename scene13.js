function drawScene13() {
 fill("#d96c8d");
 textAlign(CENTER);
 textSize(25);
 textFont("monospace");
 textStyle(BOLD);
 text("You're starving, what will you order?", width / 2, 180);

 drawButton(
   leftX,
   buttonY,
   buttonW,
   buttonH,
   "Falafel Shawarma Wrap",
   isMouseOver(leftX, buttonY, buttonW, buttonH),
 );

 drawButton(
   rightX,
   buttonY,
   buttonW,
   buttonH,
   "Chicken On The Rocks",
   isMouseOver(rightX, buttonY, buttonW, buttonH),
 );
}