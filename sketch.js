//variables of images and random x positions
let Img1;
let Img2;
let Img3;
let Img4;
let Img5;
let Img6;
let Img7;
let Img8;
let Img9;
let Img10;
let Img11;
let Img12;
let Img13;
let Img14;
let Img15;
let randomX;
let randomX1;
let randomX2;
let randomX3;
let randomX4;
let randomX5;
let randomX6;
let randomX7;
let randomX8;
let randomX9;

function preload() {
 Img1 = loadImage("/images/orangecat.png");
 Img2 = loadImage("/images/colusseum.png");
 Img3 = loadImage("/images/stormysky.jpg");
 Img4 = loadImage("/images/pavement.jpg");
 Img5 = loadImage("/images/browncat.png");
 Img6 = loadImage("/images/eiffeltower.png");
 Img7 = loadImage("/images/pisa.png");
 Img8 = loadImage("/images/blackcat.png");
 Img9 = loadImage("/images/tajmahal.png");
 Img10 = loadImage("/images/siberian.png");
 Img11 = loadImage("/images/mainecoon.png");
 Img12 = loadImage("/images/calico.png");
 Img13 = loadImage("/images/liberty.png");
 Img14 = loadImage("/images/plane.png");
 Img15 = loadImage("/images/banner.png");
}

function setup() {
  createCanvas(1300, 1000);
  randomX = random(-20, 950)
  randomX1 = random(-20, 950)
  randomX2 = random(-20, 950)
  randomX3 = random(-20, 950)
  randomX4 = random(-20, 950)
  randomX5 = random(-20, 950)
  randomX6 = random(-50, 900)
  randomX7 = random(-20, 950)
  randomX8 = random(-20, 950)
  randomX9 = random(-20, 950)
  randomX10 = random(-20, 950)
  randomX11 = random(-20, 950)
}

function draw() {
    
 background(200);
 //stormy sky
image(Img3, 0, 0, 1500, 1000);
//pavement
image(Img4, 0, 750, 1500, 300);
//plane
image(Img14, randomX11, 100, 300, 100);
//banner
image(Img15, randomX11 - 275, 110, 280, 65);
//text "World Traveling Kitties!"
 text("World Traveling Kitties!", randomX11 - 235, 145);
 textSize(20)
 textFont('helvetica')
 fill(255) 
//taj mahal
image(Img9, randomX6, 265, 700, 500);
//colosseum
image(Img2, randomX, 480, 400, 300);
//tower of pisa
image(Img7, randomX4, 50, 450, 750);
//eiffel tower
image(Img6, randomX3, 10, 700, 900);
//statue of liberty
image(Img13, randomX10, 70, 300, 700);
 //cream cat
image(Img5, randomX2, 600, 300, 300);
//siberian cat
image(Img10, randomX7, 580, 350, 350);
//maine coon cat
image(Img11, randomX8, 550, 400, 400);
//black cat
image(Img8, randomX5, 500, 250, 450);
//calico cat
image(Img12, randomX9, 600, 200, 350);
//orange cat
 image(Img1, randomX1, 700, 300, 300);

 
 

 

 



}
