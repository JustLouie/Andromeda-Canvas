
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
 	ctx.rotate( ((2*Math.PI)/10)*time.getSeconds()+ ( (2*Math.PI)/10000)*time.getMilliseconds());
 	ctx.translate(0,30);
	ctx.arc(canvas.width/4.3,canvas.height/4.3,20,0,2*Math.PI);
	ctx.fill();
	ctx.stroke();
	ctx.restore();

	ctx.beginPath();
	ctx.fillStyle="#000000";
	ctx.strokeStyle="#000000";
	ctx.save();
	ctx.translate(canvas.width/2,canvas.height/2);
 	ctx.rotate( ((2*Math.PI)/8)*time.getSeconds()+ ( (2*Math.PI)/8000)*time.getMilliseconds());
 	ctx.translate(0,30);
 	ctx.arc(canvas.width/26,canvas.height/26,10,0,2*Math.PI);
 	ctx.fill();	
 	ctx.stroke();
 	ctx.restore();

}
var canvas= document.getElementById("Main-circle");
var ctx= canvas.getContext("2d");
draw();
setInterval(draw,20);
