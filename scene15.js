function drawScene15() {
 // Title
 fill("#d96c8d");
 textAlign(CENTER);
 textSize(25);
 textFont("monospace");
 textStyle(BOLD);
 text("You’re feeling sore and tired, what will you do?", width / 2, 180);

 // Start button
 drawButton(
   leftX,
   buttonY,
   buttonW,
   buttonH,
   "Listen to music and walk home slowly",
   isMouseOver(leftX, buttonY, buttonW, buttonH),
 );

 drawButton(
   rightX,
   buttonY,
   buttonW,
   buttonH,
   "Sit at the SLC cafeteria to rest",
   isMouseOver(rightX, buttonY, buttonW, buttonH),
 );
}