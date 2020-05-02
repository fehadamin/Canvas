var c;
    var ctx ;	
		 fucntion init()
		 {
		    c=document.getElementById('myCanvas');
			ctx = c.getContext('2d');
			draw();
		 }
		 
		 function draw()
		 {
			ctx.fillStyle="#ff0000";
			ctx.fillRect(30,30,50,50);
			ctx.strokeStyle = "#000000";
			ctx.lineWidth = "3";
			ctx.strokeRect(30,30,50,50);
			
			//draw black square
			ctx.fillStyle="#000000";
			ctx.fillRect(40,45,50,50);
		 }