function drawScene7() {
 fill("#d96c8d");
 textAlign(CENTER);
 textSize(25);
 textFont("monospace");
 textStyle(BOLD);
 text("You spot a friend at the gym, what will you do?", width / 2, 180);

 drawButton(
   leftX,
   buttonY,
   buttonW,
   buttonH,
   "Invite them for lunch",
   isMouseOver(leftX, buttonY, buttonW, buttonH),
 );

 drawButton(
   rightX,
   buttonY,
   buttonW,
   buttonH,
   "Ignore them",
   isMouseOver(rightX, buttonY, buttonW, buttonH),
 );
}