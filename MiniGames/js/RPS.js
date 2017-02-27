


	var elements = ['images/rock.jpg', 'images/paper.jpg', 'images/scissors.jpg']
	var scissors = document.getElementById('scissors');
	var rock = document.getElementById('rock');
	var paper = document.getElementById('paper');
	var computerPlace = document.getElementById('computerPlace');
	var playerPlace = document.getElementById('playerPlace');
	var result = document.getElementById('result');
	var score = document.getElementById('score');
	var playerResult;
	var computerResult;
	var scoreCount = 0;
	
	
	
	document.addEventListener('tizenhwkey', function(e) {
	    if (e.keyName === "back") {
	        try {
	           window.open("index.html");
	        } catch (ignore) {}
	    }
	});
	
	
function replaceCompImage() {
	var imageId = getRandomNumber();
	computerPlace.src = elements[imageId];
	computerResult = imageId;
	getResult();
}	

function replaceImage( count ) {

	if(count == 0) {
		playerPlace.src = elements[0];
		playerResult = count;
	}
	if(count == 1) {
		playerPlace.src = elements[1];
		playerResult = count;
	}
	if(count == 2) {
		
	playerPlace.src = elements[2];
	playerResult = count;
		}
	playerResult= count;
}

scissors.addEventListener("click", function () {
	replaceImage(2);
	replaceCompImage();
});

rock.addEventListener("click", function () {
	replaceImage(0);
	replaceCompImage();
	
});

paper.addEventListener("click", function () {
	replaceImage(1);
	replaceCompImage();
	
});

function incScore() {
	scoreCount+=1;
	score.innerHTML = 'Score: ' + scoreCount;
	
}

function getResult() {
	if(playerResult == computerResult) {
		result.innerHTML = "DRAW"; 
		
	} else { if(playerResult == 0) {
		if(computerResult == 1) {
			result.innerHTML = "LOSE";
			
		} else {
			result.innerHTML = "WIN";
			incScore();
			
			
		}
	} else if(playerResult ==1) {
		if(computerResult == 0) {
			result.innerHTML= "WIN";
			incScore();
		} else {
			result.innerHTML = "LOSE";
			
		}
	} else if(playerResult ==2) {
		if(computerResult == 0) {
			result.innerHTML = "LOSE";
			
		} else {
			result.innerHTML = "WIN";
			incScore();
			
		}
	};
	}
	
    
}
function getRandomNumber()
{
	return Math.floor(Math.random() * (3));
}









