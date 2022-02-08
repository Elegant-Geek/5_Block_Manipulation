window.addEventListener('load', function() {
	let block = document.getElementById('block');
	let scaleCoefficient = 1; //setting default scale value
	let rotateDeg = 0; //setting default rotate value
	
	//Position Y bit
	let positionY = document.getElementById('position-y');
	positionY.addEventListener('input', function() {
		block.style.top = positionY.value + 'px'; //connecting js to css bit
	})

	//Position X bit
	let positionX = document.getElementById('position-x');
	positionX.addEventListener('input', function() {
		block.style.left = positionX.value + 'px'; //connecting js to css bit
	})

	//Size manipulation
	let size = document.getElementById('size');
	size.addEventListener('input', function() {
		scaleCoefficient = size.value;
		block.style.transform = `scale(${scaleCoefficient}) rotate(${rotateDeg}deg)`; //connecting js to css bit
	})

	//Opacity manipulation
	let opacity = document.getElementById('opacity');
	opacity.addEventListener('input', function() {
		block.style.opacity = opacity.value; //connecting js to css bit
	})

	//Shape manipulation
	let selector = document.getElementById('shape-select');
	let okButton = document.getElementById('ok-shape');
	okButton.addEventListener('click', function() { //so on the CLICK event via the button, the function is triggered
		let option = selector.value; //you get either 1 2 or 3 returned bc there are three options.
		if(option === '1') {
			block.style.borderRadius = '0';
			rotateDeg = 0;
			block.style.transform = `scale(${scaleCoefficient}) rotate(${rotateDeg}deg)`; //connecting js to css bit
		} else if(option === '2') {
			block.style.borderRadius = '50%';
		} else if(option === '3') {
			block.style.borderRadius = '0';
			rotateDeg = 45;
			block.style.transform = `scale(${scaleCoefficient}) rotate(${rotateDeg}deg)`; //connecting js to css bit
		} 
	})

	//HEX manipulation
	let hex = document.getElementById('hex');
	hex.addEventListener('keyup', function(event) { //enter key/return key is tied to the keyup event
		if(event.key === 'Enter') {
			block.style.backgroundColor = `#${hex.value}`;
		}
		 //connecting js to css bit
	})

	//RGBA manipulation
	let rgbaR = document.getElementById('rgba-r');
	let rgbaG = document.getElementById('rgba-g');
	let rgbaB = document.getElementById('rgba-b');
	let rgbaA = document.getElementById('rgba-a');

	let rgbaInputs = document.querySelectorAll('.rgba-container input'); //selecting not the container, but the container inputs!
	rgbaInputs.forEach(function(element) {
		element.addEventListener('input', function() {
		block.style.backgroundColor = `rgba(${rgbaR.value}, ${rgbaG.value}, ${rgbaB.value}, ${rgbaA.value})`;
		})
	})

	//Rotation manipulation (my own!)
	let rotateMe = document.getElementById('rotation');
	rotateMe.addEventListener('input', function() {
		rotateDeg = rotateMe.value;
		block.style.transform = `scale(${scaleCoefficient}) rotate(${rotateDeg}deg)`; //connecting js to css bit
	})

})