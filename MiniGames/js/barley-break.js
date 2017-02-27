




var numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var positionId = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];
var newGameButton = document.getElementById("newGame");
var emptyPosition =0;




document.addEventListener('tizenhwkey', function(e) {
    if (e.keyName === "back") {
        try {
          window.open("index.html");
          window.close();
        } catch (ignore) {}
    }
});

function change(count) {
	if((Math.abs(count - emptyPosition) == 4) || (Math.abs(count - emptyPosition) == 1)) {
		document.getElementById(positionId[count]).src = "images/barley/15.png";
		document.getElementById(positionId[emptyPosition]).src = "images/barley/" + numbers[count]+ ".png";
		buf = numbers[emptyPosition];
		numbers[emptyPosition] = numbers[count];
		numbers[count] =  buf;
		emptyPosition = count;
		isWin();
	}
}


newGameButton.addEventListener("click", function () {
	shuffleAndInit();
});

function shuffleAndInit() {
	for( var i = 0; i< 16; i++) {
		var buf = numbers[i];
		var random = Math.floor(Math.random() * 15);
		if(buf == 15 ) {
			emptyPosition = random;
		}
		if(numbers[random] == 15){
			emptyPosition = i;
		}
		numbers[i] = numbers[random];
		numbers[random] = buf;
	}
	
	for(var i =0; i<16; i++) {
		document.getElementById(positionId[i]).src = "images/barley/" + numbers[i] + ".png";
	}
}

function  isWin() {
	var bool = true;
	for(var i =0; i<16; i++){
		if(numbers[i]!= i) {
			bool = false;
		}
	}
	if(bool == true) {
		alert("YOU WIN");
	}
}