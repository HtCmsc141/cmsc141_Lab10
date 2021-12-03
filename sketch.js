function setup(){
  createCanvas(400,400);
  background(100);
  myButton = new Clickable(100,100);
}
function draw(){
  // background(100);
  myButton.x = 100;
  myButton.y = 100;
  myButton.draw();
  myButton.onOutside = function(){
  console.log("Hey! Press me!");
}
  myButton.onHover = function(){
  console.log("The cursor is over me!");
}
  myButton.onPress = function(){
  console.log("I have been pressed!");
}
  myButton.onRelease = function(){
  console.log("I have been released!");
}
}

