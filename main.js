var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.beginPath(); 
// // Color of the car 
// var degrade = ctx.createLinearGradient(0, 0, 200, 0);
// degrade.addColorStop(0, 'white');
// degrade.addColorStop(1, '#10a992');
// ctx.fillStyle = degrade;

ctx.fillStyle = '#c78e13'// the color of the car 

ctx.fillRect(100, 25, 80, 30); //the first part of the car (x, y, width, height)
ctx.fillRect(70, 45, 140, 35); // second part of the car (rectangle)

// The style of text "taxi"
ctx.font = '15px serif';
ctx.textBaseline = 'hanging';
ctx.strokeStyle = '#146a2d'
ctx.strokeText('Hello!', 120, 30);
// 
ctx.arc(100, 77, 16, 3, Math.PI * 2, true);  // Cercle 
ctx.arc(180, 79, 15, 3, Math.PI * 2, true); 
ctx.fillStyle = '#4d4d4d'
ctx.fill();
ctx.closePath();





