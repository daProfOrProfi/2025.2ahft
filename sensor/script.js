var ball       = document.querySelector('.ball');
var garden     = document.querySelector('.garden');
var output     = document.querySelector('.output');
var sensorList = document.querySelector('.sensorList');
var m4 = document.getElementById('meter_4');
var m5 = document.getElementById('meter_5');
var m6 = document.getElementById('meter_6');
var m7 = document.getElementById('meter_7');
var em = document.getElementById("errorMessages");

var maxX = garden.clientWidth  - ball.clientWidth;
var maxY = garden.clientHeight - ball.clientHeight;

let vx = 0;
let vy = 0;
let vz = 0;
// let laxa = new Array();      //array for linearAccelerationSensor

let lastTimeStamp = Date.now();

const options = { frequency: 60, referenceFrame: 'device' };

/*
let laSensor = new LinearAccelerationSensor(options);//({frequency: 60});
//accelerometer without gravity
laSensor.addEventListener('reading', e => {
  const dt = laSensor.timestamp - lastTimeStamp;
  // laxa.push( [ laSensor.x.toFixed(3), laSensor.y.toFixed(3), laSensor.z.toFixed(3) ] );
  lastTimeStamp = laSensor.timestamp;//Date.now();
  vx += laSensor.x * ( dt );
  vy += laSensor.y * ( dt );
  vz += laSensor.z * ( dt );
  });
laSensor.addEventListener("error", (event) => {
  // Handle runtime errors.
  if (event.error.name === "NotAllowedError") {
    // Branch to code for requesting permission.
  } else if (event.error.name === "NotReadableError") {
    console.log("Cannot connect to LinearAcceleration.");
    em.textContent += "no LinearAcceleration ";
  }
});
*/

window.addEventListener("devicemotion", (event) => {
    vx += event.acceleration.x * (event.interval);
    vy += event.acceleration.y * (event.interval);
    vz += event.acceleration.z * (event.interval);
})

/*ondevicemotion = (event) => { }*/


function canvasClick() {
//   canvas.clear();
ctx.clearRect(0, 0, xMax, yMax );
//   ctx.stroke();
}

function gardenClick() {
  vx = 0;
  vy = 0;
  vz = 0;
}

function sensorListClick() {
    sensorList.textContent = "we start soon ";
    m4.value = 50;
  //laSensor.start();
  const iinterval = setInterval( upDateScreen, 100 );
}

function upDateScreen() {
  //output.textContent =  "length la: " + laxa.length + "rel: " + roa.length + "abs: " + aoa.length + "\n";
  // if( laxa.length > 0 ){
    //linear acceleration worked
    m4.value = vx.toFixed(3);
    m5.value = vy.toFixed(3);
    m6.value = vz.toFixed(3);
    m7.value = Math.sqrt( Math.pow( vx, 2 ) + Math.pow( vy, 2 ) + Math.pow( vz, 2 ) );
    ball.style.top  = (vy*40/500+42.5) + "vw";
    ball.style.left = (vx*40/500+42.5) + "vw";
    output.textContent += "vx: " + vx + "vy: " + vy + "vz: " + vz;
  //   while( laxa.length > 0 ){
  //     laxa.shift();
  //   }
  // }
}



