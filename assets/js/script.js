//déclaration de la variable
var c = document.getElementById('canvas');
var ctx = c.getContext('2d');

//toit de la maison
ctx.beginPath();
ctx.moveTo(200,50);
ctx.lineTo(300,150);
ctx.lineTo(100,150);
ctx.closePath();
ctx.fillStyle = '#D7823E';
ctx.fill();
//Carré maison
ctx.beginPath();
ctx.moveTo(100,350);
ctx.lineTo(100,150);
ctx.lineTo(300,150);
ctx.lineTo(300,350);
ctx.closePath();
ctx.fillStyle = '#A1D8E6';
ctx.fill();
//Carré fenêtre gauche
ctx.beginPath();
ctx.moveTo(110,180);
ctx.lineTo(110,220);
ctx.lineTo(150,220);
ctx.lineTo(150,180);
ctx.closePath();
ctx.fillStyle = '#C9C9C9';
ctx.fill();
//Carré fenêtre droite
ctx.beginPath();
ctx.moveTo(290,180);
ctx.lineTo(290,220);
ctx.lineTo(250,220);
ctx.lineTo(250,180);
ctx.closePath();
ctx.fillStyle = '#C9C9C9';
ctx.fill();
//Porte
ctx.beginPath();
ctx.moveTo(180,350);
ctx.lineTo(180,280);
ctx.lineTo(220,280);
ctx.lineTo(220,350);
ctx.closePath();
ctx.fillStyle = '#C9C9C9';
ctx.fill();
