
// var raf = 	window.mozRequestAnimationFrame ||
//         	window.webkitRequestAnimationFrame ||
//         	window.msRequestAnimationFrame ||
//         	window.oRequestAnimationFrame;
      	
// function draw()
// {
// 	// e.preventDefault();
// 	// e.stopPropagation();
// 	// var mouseX=parseInt(e.clientX-offsetX),
// 	// 	mouseY=parseInt(e.clienY-offsetY),
// 	// 	dx=mouseX-canvas.width/26;
// 	// 	dy=mouseY-canvas.height/26;
// 	ctx.clearRect(0,0,canvas.width,canvas.height);
// 	ctx.beginPath();
// 	ctx.arc(canvas.width/2,canvas.height/2,290,0,2*Math.PI);
// 	ctx.lineWidth=6;
// 	ctx.strokeStyle="#ED4844";
// 	ctx.stroke();

// 	ctx.beginPath();
// 	ctx.fillStyle="#ED4844";
// 	ctx.arc(canvas.width/2,canvas.height/2,50,0,2*Math.PI);
// 	ctx.fill();
// 	ctx.lineWidth=6;
// 	ctx.strokeStyle="#ED4844";
// 	ctx.stroke();
	
// 	ctx.beginPath();
// 	ctx.fillStyle="#ED4844";
// 	ctx.strokeStyle="#ED4844";
// 	ctx.save();
// 	ctx.translate(canvas.width/2,canvas.height/2);
// 	var time = new Date();
// 	ctx.rotate(((2*Math.PI)/10)*time.getSeconds()+ ( (2*Math.PI)/10000)*time.getMilliseconds());
// 	// if (ctx.isPointInPath(dx,dy))
// 	// {
// 	// 	ctx.rotate(((2*Math.PI)/10)*time.getSeconds()+ ( (2*Math.PI)/10000)*time.getMilliseconds());
// 	// }
// 	// else
// 	// {
// 	// 	ctx.rotate(0);
// 	// }
//  	ctx.translate(0,30);
// 	ctx.arc(canvas.width/4.3,canvas.height/4.3,20,0,2*Math.PI);
// 	ctx.fill();
// 	ctx.stroke();
// 	ctx.restore();

// 	ctx.beginPath();
// 	ctx.fillStyle="#000000";
// 	ctx.strokeStyle="#000000";
// 	ctx.save();
// 	ctx.translate(canvas.width/2,canvas.height/2);
// 	ctx.rotate(((2*Math.PI)/10)*time.getSeconds()+ ( (2*Math.PI)/10000)*time.getMilliseconds());
//  // 	if (ctx.isPointInPath(dx,dy))
// 	// {
// 	// 	ctx.rotate(0);
// 	// }
// 	// else
// 	// {
// 	// 	ctx.rotate(((2*Math.PI)/10)*time.getSeconds()+ ( (2*Math.PI)/10000)*time.getMilliseconds());
// 	// }
//  	ctx.translate(0,30);
//  	ctx.arc(canvas.width/26,canvas.height/26,10,0,2*Math.PI);
//  	ctx.fill();	
//  	ctx.stroke();
//  	ctx.restore();

// }
// var canvas= document.getElementById("Main-circle");
// var ctx= canvas.getContext("2d");
// // var $canvas=$("#Main-circle");
// // var canvasOffset=$canvas.offset();
// // var offsetX=canvasOffset.left;
// // var offsetY=canvasOffset.top;
// // var scrollX=$canvas.scrollLeft();
// // var scrollY=$canvas.scrollTop();
// draw();
// setInterval(draw,20);
// // canvas.onmousemove=function(e) {
// // 	draw(e);
// // 	setInterval('draw('+e+')',20);
// // };


function draw_canvas(canvas,message)
{
	
	var ctx=canvas.getContext('2d');
	ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.font="40px Calibri";
	ctx.fillStyle="black";
	ctx.fillText(message,10,250);

}
function getMousePos(canvas,evt)
{
	var rect=canvas.getBoundingClientRect();
	return{
		x: evt.clientX-rect.left,
		y: evt.clientY-rect.top
	};
}
var canvas = document.getElementById('Main-circle');
var ctx=canvas.getContext('2d');
canvas.addEventListener('mousemove',function(evt){
	var  mousePos= getMousePos(canvas,evt);
	var message='Mouse-Position'+mousePos.x+','+mousePos.y;
	draw_canvas(canvas,message);

},false);
