function drawScene6() {
 // Title
 fill("#d96c8d");
 textAlign(CENTER);
 textSize(25);
 textFont("monospace");
 textStyle(BOLD);
 text("Now that you’re done, where should you eat?", width / 2, 180);

 // Start button
 drawButton(
   leftX,
   buttonY,
   buttonW,
   buttonH,
   "Pho Anh Vu",
   isMouseOver(leftX, buttonY, buttonW, buttonH),
 );

 drawButton(
   rightX,
   buttonY,
   buttonW,
   buttonH,
   "Lazeez Shawarma",
   isMouseOver(rightX, buttonY, buttonW, buttonH),
 );
}