
var squareNum = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var displayColorStripe = document.getElementById("displayColorStripe");
var messageDisplay = document.getElementById("message");
var h1Background = document.querySelector("h1");
var stripeOptions = document.getElementById("stripeOptions");
var resetButton = document.querySelector("#reset")
var modeButtons = document.querySelectorAll(".mode")


init();
function init(){
	setupModeButtons();
	setupResetButton();
	setupSquares();
	reload();
}

function setupModeButtons(){
	for (i = 0; i< modeButtons.length; i++){
 	modeButtons[i].addEventListener("click", function(){
 		modeButtons[0].classList.remove("selected");
 		modeButtons[1].classList.remove("selected");
 		this.classList.add("selected");
 		this.textContent === "Easy" ? squareNum = 3: squareNum = 6;
 	
 		reload();
 	});
 }	
}

function setupSquares(){
	for (var i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.background;
			if (clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again";
				changColor(clickedColor)
				h1Background.style.background = clickedColor;
			} else{
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again"
			}
		});
	}
}

function setupResetButton(){
	resetButton.addEventListener("click", function(){
		reload();
	});
}


function changColor (color){
	// loops through squares and set them all to the provided color
	for (var i = 0; i < squares.length; i++){
		squares[i].style.background = color
	}
}

function randColor(){
	// loops through colors array and pick random color
	var colors_access = Math.floor(Math.random() * colors.length)
	for (var i = 0; i< colors.length; i++){
		result = colors[colors_access];
	return result
	}
}

function randrgb(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb("+r +", "+g+", "+b+")";
}

function setColorsArr(num){
	var arr = []
	for (var i = 0; i < num; i++){
		arr.push(randrgb());
	}
	return arr;
}


function reload() {
	colors = setColorsArr(squareNum);
	pickedColor = randColor();
	displayColorStripe.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";

	for (i = 0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h1Background.style.background = "steelblue";
	}

