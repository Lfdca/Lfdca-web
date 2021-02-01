function setup() {
  createCanvas(400,400);
  print('Hello World');
 console.log('setup');

 //var franc = require('franc');
  // Use a local variable a in for loop
  for (let z=0; z < 221; z += .23) {
    print(z);  
    line(0, z+1, z*z, height);
    line(z*z, z+121,z*z,z );
    circle(z+25,270,z);
    fill(1, 176, 240);
  

}

  
  
}

function draw() {
  
 background(112,03);
}

