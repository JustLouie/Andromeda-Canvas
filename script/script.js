

function Main_circle()
{
	ctx.beginPath();
	ctx.arc(canvas.width/2,canvas.height/2,290,0,2*Math.PI);
	ctx.lineWidth=6;
	ctx.strokeStyle="#ED4844";
	ctx.stroke();
}
function Core()
{	
	ctx.beginPath();
	ctx.fillStyle="#ED4844";
	ctx.arc(canvas.width/2,canvas.height/2,50,0,2*Math.PI);
	ctx.fill();
	ctx.lineWidth=6;
	ctx.strokeStyle="#ED4844";
	ctx.stroke();
}
function Project_circle()
{
	var 
	    container = $("#Main-circle"),
	    width = container.width(),
	    height = container.height(),
	    angle = 0,
	    step = (2*Math.PI) / container.length;
	var radius = width/2;
	ctx.beginPath();
	ctx.fillStyle="#ED4844";
	container.each(function() {
	    var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2),
	        y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
	    ctx.arc(x-150,y+50,20,0,2*Math.PI);
	    angle += step;

	});
	ctx.fill();
	ctx.strokeStyle="#ED4844";
	ctx.stroke();
}
var canvas= document.getElementById("Main-circle");
var ctx= canvas.getContext("2d");
Main_circle();
Core();
Project_circle();




// var canvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext("2d");

// var canvasOffset = $("#myCanvas").offset();
// var offsetX = canvasOffset.left;
// var offsetY = canvasOffset.top;

// var myCircle = {
//     x: 95,
//     y: 50,
//     radius: 40,
//     rr: 25 * 25, // radius squared
//     hovercolor: "red",
//     blurcolor: "green",
//     isHovering: false
// }

//     function drawCircle(circle) {
//         ctx.beginPath();
//         ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
//         ctx.closePath();
//         ctx.fillStyle = circle.isHovering ? circle.hovercolor : circle.blurcolor;
//         ctx.fill();
//     }

// drawCircle(myCircle);

// function handleMouseMove(e) {
//     mouseX = parseInt(e.clientX - offsetX);
//     mouseY = parseInt(e.clientY - offsetY);
//     var dx = mouseX - myCircle.x;
//     var dy = mouseY - myCircle.y;

//     // math to test if mouse is inside circle
//     if (dx * dx + dy * dy < myCircle.rr) {

//         // change to hovercolor if previously outside
//         if (!myCircle.isHovering) {
//             myCircle.isHovering = true;
//             drawCircle(myCircle);
//         }

//     } else {

//         // change to blurcolor if previously inside
//         if (myCircle.isHovering) {
//             myCircle.isHovering = false;
//             drawCircle(myCircle);
//         }
//     }

// }

// $("#myCanvas").mousemove(function (e) {
//     handleMouseMove(e);
// });