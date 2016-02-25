var clicked = false, newBall = false, points = 0;

setInterval(function(){
	newBall = true;
	
	console.log('click fast!');
	setTimeout(function(){
		document.removeEventListener('mousedown', clickListener);
		if (clicked) {
			points++;
			console.log('good job! Total points:', points);			
		}
		else {
			console.log('too late!');
		}
		newBall = false;
		clicked = false;
		document.addEventListener('mousedown', clickListener)
	}, 600) 

}, 3000* Math.random() + 3000);

 function clickListener(){
	clicked = true;
		if (!newBall) {
			points--;
			console.log('too early! Total points:', points);
			
		}
	}