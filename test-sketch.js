function setup() {
  createCanvas(600,600);
  print('Hello World');
 console.log('setup');

 //var franc = require('franc');
  // Use a local variable a in for loop
  for (let z=0; z < 221; z += .23){
    line(z*z*z, z+10, z*z, height);
    line(z*z*z, 3, z*z, z);
    line(z+2, z+13, z*z, height);
    line(z*z*z, z+121,z*z,z );
    circle(z+50,370,z); 
    fill(11, 176, 240);
}

  
  
}

function draw() {

  
 background(112,03);
}

