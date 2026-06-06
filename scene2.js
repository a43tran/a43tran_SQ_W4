function drawScene2() {
 fill("#d96c8d");
 textAlign(CENTER);
 textSize(25);
 textFont("monospace");
 textStyle(BOLD);
 text("What will you order at Tim Hortons?", width / 2, 180);

 drawButton(
   leftX,
   buttonY,
   buttonW,
   buttonH,
   "Iced Coffee",
   isMouseOver(leftX, buttonY, buttonW, buttonH),
 );

 drawButton(
   rightX,
   buttonY,
   buttonW,
   buttonH,
   "Sausage Farmer's Wrap",
   isMouseOver(rightX, buttonY, buttonW, buttonH),
 );
}