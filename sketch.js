//This slit scan generator is scanning random points from an image. Here, it using multiple images: the web browser's camera live feed and a couple more images from the website when searched for "color" , "sun", "wave". The slit scan code was orginally sourced from open processing. 
 
// slitscan camera, syntax:
//// (location on img, placement on canvas, width, height) has less variables compared to the "copy" pixels 
//add a interactive scale for the viewer to change the pixel density 
//add screenshot button

var video;
var x = 0;
var y = 0;
var img;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var imageflips;
let whichImage = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  img = loadImage("colorscale.jpg");
  img2 = loadImage("pic2.jpeg");
  img3 = loadImage("pic3.jpeg");
  img4 = loadImage("pic4.jpeg");
  img5 = loadImage("pic5.jpeg");
  img6 = loadImage("pic6.jpeg");
  img7 = loadImage("pic7.jpeg");
  
  video = createCapture(VIDEO);
  video.size(windowWidth, windowHeight, WEBGL);
  video.hide();
  pixelDensity(0.019); //0.019, 
  background(220);
  imageflips = false;
  frameRate(15);
}

function draw() {
  //rotate(sin(millis()+1000));
  let wt = 55;
  let r = random(-5000, windowWidth);
 // let r2 = random(20,100)
  var w = windowWidth;
  var h = windowHeight;
  var line = img.get(r, 0, wt, height);
  var line2 = img2.get(r, 0, wt, height);
  var line3 = img3.get(r, 0, wt, height);
  var line4 = img4.get(r, 0, wt, height);
  var line5 = img5.get(r, 0, wt, height);
  var line6 = img6.get(r, 0, wt, height);
  var line7 = img7.get(r, 0, wt, height);
  var linevid = video.get(r, 0, wt, height);
  var linevid2 = video.get(r*0.2, 0, wt, height);
  
  translate(x, 0);
  
  let whichImage = frameCount % 6;
  
  if (whichImage == 0) {
        image(line, 0, 0);
/*
  }else if (whichImage == 1) {
        image(linevid2, 0, 0);
*/}
  else if (whichImage == 1){
        image(linevid, 0, 0);
  }
  else if (whichImage == 2) {
        image(line3, 0, 0);

  }
 // else if (whichImage == 4) {
  //      image(line4, 0, 0);

  
  else if (whichImage == 3) {
        image(linevid2, 0, 0);

  }
 // else if (whichImage == 6) {
 //       image(line6, 0, 0);


  else if (whichImage == 4) {
        image(line7, 0, 0);
  }
    else if (whichImage == 5) {
        image(line5, 0, 0);
  }

  print(whichImage);

  x = x + wt;
  if (x > w) {
    x = 0;
  }

  y = y + 0;
  if (y > h) {
    y = 0;
  }
  
  
  img.resize(windowWidth, windowHeight);
  img2.resize(windowWidth, windowHeight);
  img3.resize(windowWidth, windowHeight);
  img4.resize(windowWidth, windowHeight);
  img5.resize(windowWidth, windowHeight);
  img6.resize(windowWidth, windowHeight);
  img7.resize(windowWidth, windowHeight);

}

///pick a random coloumn
///everytime
///have them interchange
//load vids
//width increases 