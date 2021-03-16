
let mySound, amplitude;
function preload() {
  //soundFormats('mp3', 'ogg');
  mySound = loadSound('music.mp3');
  
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  console.log("setup");
  amplitude = new p5.Amplitude();
}

function draw() {
  background('#ffffff');
  let level = amplitude.getLevel();
  let diameter = map(level, 0, 1, 50, 500);
  fill("#f4b2b2");
  //ellipse(250,300,diameter,diameter);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(diameter/2, diameter/4);
}

function mousePressed() {
  if(mySound.isPlaying()){
    //stop the song
    mySound.stop();
  }
  else{
    mySound.play();
  }
}


