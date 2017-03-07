var ship;
var head = [];
var oranges = [];
var wallpaper;
var mexican;
var trump = [];
var headIndex;
var soundIndex;
var mySound;

function preload(){
  wallpaper = loadImage('images/wallpaper-mario.jpg');
  mexican = loadImage('images/mexican.png');
  trump[0] = loadImage('images/trump0.png');
  trump[1] = loadImage('images/trump1.png');
  trump[2] = loadImage('images/trump2.png');
  trump[3] = loadImage('images/trump3.png');
  trump[4] = loadImage('images/trump4.png');
  trump[5] = loadImage('images/trump5.png');
  mySound = loadSound("sounds/mySound0.mp3");
  // mySound[1] = loadSound('sounds/mySound1.mp3');
  // mySound[2] = loadSound('sounds/mySound2.mp3');
  // mySound[3] = loadSound('sounds/mySound3.mp3');
  // mySound[4] = loadSound('sounds/mySound4.mp3');
  // mySound[5] = loadSound('sounds/mySound5.mp3');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  mySound.setVolume(0.1);
  ship = new Ship();
  for (var i = 0; i < 6; i++) {
    headIndex = int(random(0, 5));
    head[i] = new Head(i*80+80, 10, headIndex );
  }
}

function draw() {
  background(wallpaper);
  ship.show();
  ship.move();  

  for (var i = 0; i < oranges.length; i++) {
    oranges[i].show();
    oranges[i].move();
    for (var j = 0; j < head.length; j++) {
      if (oranges[i].hits(head[j])) {
        head[j].change();
        soundIndex = int(random(0, 5));
        mySound[soundIndex].play();
        oranges[i].evaporate();
      }
    }
  }

  var edge = false;

  for (var i = 0; i < head.length; i++) {
    head[i].show();
    head[i].move();
    if (head[i].x > width || head[i].x < 0) {
      edge = true;
    }
  }

  if (edge) {
    for (var i = 0; i < head.length; i++) {
      head[i].shiftDown();
    }
  }

  for (var i = oranges.length-1; i >= 0; i--) {
    if (oranges[i].toDelete) {
      oranges.splice(i, 1);
    }
  }


}

function keyReleased() {
  if (key != ' ') {
    ship.setDir(0);
  }
}


function keyPressed() {
  if (key === ' ') {
    var orange = new Orange(ship.x+50, height);
    oranges.push(orange);
  }

  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
}