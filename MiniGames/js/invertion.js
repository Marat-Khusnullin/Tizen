window.onload = function() {
	setLevelOne();
}


var files = ["images/invertion/0.png", "images/invertion/1.png"];
var badNumber;
var currentLevel =1;
var maxLevel =5;
var resetGame = document.getElementById("newGame");

resetGame.addEventListener("click", function () {
	setLevel(currentLevel);
	
});
	



document.addEventListener('tizenhwkey', function(e) {
    if (e.keyName === "back") {
        try {
        	window.open("index.html");
        	window.close();
        } catch (ignore) {}
    }
});

function setLevel(level) {
	
	
	if(level == 1) {
		setLevelOne();
		document.getElementById("level").innerHTML = "Level:" + level;
		}
	if(level == 2) {
		setLevelTwo();
		document.getElementById("level").innerHTML = "Level:" + level;
	} else if(level == 3){
		setLevelThree();
	} else if(level ==4){
		setLevelFour();
	} else if(level == 5) {
		setLevelFive();
	}
}



function change(count) {
	var changed;
	changed = document.getElementById("" + count);
	
	if(changed.getAttribute("src") == files[0]){
		
		changed.src = files[1];
		badNumber+=1;
	} else {
		changed.src = files[0];
		badNumber-=1;
	}
	
	
	
	if((count -5)>=0 ){
		changed = document.getElementById("" + (count-5));
	    if(changed.getAttribute("src") == files[0]) {
		changed.src = files[1];
		badNumber+=1;
	    } else {
	    	changed.src = files[0];
	    	badNumber-=1;
	    
	    }
	}
	
	if((count +5) <=24){
		changed = document.getElementById("" + (count+5));
		if(changed.getAttribute("src") == files[0]) {
			changed.src = files[1];
			badNumber+=1;
		    } else {
		    	changed.src = files[0];
		    	badNumber-=1;
		    }
	}
	
	if((count +1)<=24 && (count!= 4) && (count!= 9) && (count!= 14) && (count!= 19)){
		changed = document.getElementById("" + (count+1));
		if(changed.getAttribute("src") == files[0]) {
			changed.src = files[1];
			badNumber+=1;
		    } else {
		    	changed.src = files[0];
		    	badNumber-=1;
		    }
	}
	
	if(((count -1)>=0)&& (count!=0)&& (count!=5)&& (count!=10)&& (count!=15) && (count!=20)){
		changed = document.getElementById("" + (count-1));
		if(changed.getAttribute("src") == files[0]) {
			changed.src = files[1];
			badNumber+=1;
		    } else {
		    	changed.src = files[0];
		    	badNumber-=1;
		    }
	}
	
	checkForWin();

}


function setLevelOne() {
	clear();
	document.getElementById("10").src= files[1];
	document.getElementById("12").src= files[1];
	document.getElementById("14").src= files[1];
	badNumber =3;
}

function setLevelTwo() {
	clear();
	document.getElementById("12").src = files[1];
	for(var i=16; i<19; i++) {
		document.getElementById("" + i).src = files[1];
	}
	for(var i =20; i<25; i++){
		document.getElementById("" + i).src = files[1];
	}
	badNumber =9;
}


function setLevelThree() {
	clear();
	for(var i=0; i<4; i++) {
		document.getElementById("" + i).src = files[1];
		document.getElementById("" + (i+20)).src = files[1];
	}
	for(var i = 5; i<20; i+=5){
		document.getElementById("" + i).src = files[1];
		document.getElementById("" +(i+4)).src = files[1];
	}
	badNumber =14;
}

function setLevelFour() {
	clear();
	for(var i =2; i<11; i+=4) {
		document.getElementById("" +i).src = files[1];
		document.getElementById("" + (i+6)).src = files[1];
		document.getElementById("" + (i+12)).src = files[1];
	}
	badNumber =9;
	
}

function setLevelFive() {
	clear();
	document.getElementById("11").src = files[1];
	document.getElementById("16").scr = files[1];
	document.getElementById("21").src = files[1];
	badNumber =3;
}


function clear() {
	for(var i=0; i<25; i++) {
		document.getElementById("" + i).src = files[0];
	}
	badNumber = 0;
}

function checkForWin() {
	if(badNumber == 0) {
		if(currentLevel+1<=maxLevel) {
		setLevel(currentLevel + 1);
		currentLevel+=1;
		} else {
			alert("YOU WON");
			setLevel(1);
		}
	}
}







