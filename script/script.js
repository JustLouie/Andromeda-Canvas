
var raf = 	window.mozRequestAnimationFrame ||
        	window.webkitRequestAnimationFrame ||
        	window.msRequestAnimationFrame ||
        	window.oRequestAnimationFrame;
function draw()
{
	ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.beginPath();
	ctx.arc(canvas.width/2,canvas.height/2,290,0,2*Math.PI);
	ctx.lineWidth=6;
	ctx.strokeStyle="#ED4844";
	ctx.stroke();

	ctx.beginPath();
	ctx.fillStyle="#ED4844";
	ctx.arc(canvas.width/2,canvas.height/2,50,0,2*Math.PI);
	ctx.fill();
	ctx.lineWidth=6;
	ctx.strokeStyle="#ED4844";
	ctx.stroke();

	ctx.beginPath();
	ctx.fillStyle="#ED4844";
	ctx.strokeStyle="#ED4844";
	ctx.save();
	ctx.translate(canvas.width/2,canvas.height/2);
	var time = new Date();
 	ctx.rotate( ((2*Math.PI)/6)*time.getSeconds()+ ( (2*Math.PI)/6000)*time.getMilliseconds());
 	ctx.translate(0,30);
	ctx.arc(canvas.width/4.3,canvas.height/4.3,20,0,2*Math.PI);
	ctx.fill();
	ctx.translate(105,0);
	ctx.stroke();
	ctx.restore();

}
var canvas= document.getElementById("Main-circle");
var ctx= canvas.getContext("2d");
draw();
setInterval(draw,20);



// var raf = 	window.mozRequestAnimationFrame ||
//         	window.webkitRequestAnimationFrame ||
//         	window.msRequestAnimationFrame ||
//          	window.oRequestAnimationFrame;
      	
// function myfunc()
// {
// 	var canvas = document.getElementById('Main-circle');
// 	var ctx = canvas.getContext('2d');
// 	ctx.clearRect(0,0,canvas.width,canvas.height);
// 	ctx.beginPath();
// 	ctx.fillStyle='red';
//     ctx.strokeStyle = 'rgba(0,153,255,0.4)';
//     ctx.lineWidth=11;
// 	ctx.save();
// 	ctx.translate(500,300);
// 	var time = new Date();
// 	ctx.rotate( ((2*Math.PI)/6)*time.getSeconds()+ ( (2*Math.PI)/6000)*time.getMilliseconds());
// 	ctx.translate(30,30);
// 	ctx.arc(50,50,50,0,2*Math.PI);
// 	ctx.stroke();
// 	ctx.restore();
	

// }
// setInterval(myfunc,20);
//  function animate()
// {
	
// } 
//  window.onload=function()
//  {
//  	animate();
//  }
