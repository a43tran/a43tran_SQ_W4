function drawScene5() {
 fill("#d96c8d");
 textAlign(CENTER);
 textSize(25);
 textFont("monospace");
 textStyle(BOLD);
 text("Now that you’re full, you’re craving a drink.", width / 2, 180);

 drawButton(
   leftX,
   buttonY,
   buttonW,
   buttonH,
   "Mango Creamy Chill",
   isMouseOver(leftX, buttonY, buttonW, buttonH),
 );

 drawButton(
   rightX,
   buttonY,
   buttonW,
   buttonH,
   "Peach Frozen Quencher",
   isMouseOver(rightX, buttonY, buttonW, buttonH),
 );
}
