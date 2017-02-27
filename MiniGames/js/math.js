window.onload = function() {
	inc=1;
    setFirstGroupStatement();
    setTime();
}

var yesButton = document.getElementById("yes");
var noButton = document.getElementById("no");
var statement = document.getElementById("statement");
var score = document.getElementById("score");
var timer = document.getElementById("timer");
var scoreCount =0;
var isTrue;
var inc;
var time = 15;
var timeFunction;

document.addEventListener('tizenhwkey', function(e) {
    if (e.keyName === "back") {
        try {
           window.open("index.html");
        } catch (ignore) {}
    }
});

yesButton.addEventListener("click", function () {
	
	if(isTrue == true) {
		time+=2;
		timer.innerHTML = "" +time;
		scoreCount+=1;
		score.innerHTML = "Score: " + scoreCount;
	} else {
		time-=3;
		timer.innerHTML = "" +time;
	}
	inc+=1;
	if(inc<=10) {
	setFirstGroupStatement();
	} else if(inc <=20) {
		setSecondGroupStatement();
	} else {
		setThirdGroupStatement();
	}
});

noButton.addEventListener("click", function () {
	if(isTrue == true) {
		time-=3;
		timer.innerHTML = "" +time;
		} else {
		time+=2;
		timer.innerHTML = "" +time;
		scoreCount+=1;
		score.innerHTML = "Score: " + scoreCount;
	}
	inc+=1;
	if(inc<=10) {
		setFirstGroupStatement();
		} else if(inc <=20) {
			setSecondGroupStatement();
		} else {
			setThirdGroupStatement();
		}
});

function setTime() {
 timeFunction = setInterval(function() {
	 if(time>=1){
	 time-=1;
	 timer.innerHTML = "" +time;
	 }
	 if(time<1){
		 clearInterval(timeFunction);
		 alert("Your score: " + scoreCount);
		 restart();	 
	 }
 }, 1000);
 
}

function setFirstGroupStatement() {
	isStatementTrue();
	first = Math.floor(Math.random() * (9)) +1;
	second = Math.floor(Math.random() * (9)) +1;
    var signValue;
	if (first > second && first % second == 0 && second != 0) {
        signValue = getSignWithDivision();
	}
	else {
        signValue = getSign();
	}
	var trueResult;

	if(signValue == 1) {
		trueResult = first + second;
	} else if (signValue == 2) {
		trueResult = first - second;
	} else if (signValue == 3) {
		trueResult = first * second;
	} else if (signValue == 4) {
		trueResult = first / second;
	}
	setValues(first,second,signValue,trueResult, 1);
	
}


function setSecondGroupStatement() {
	isStatementTrue();
	first = Math.floor(Math.random() * (41)) +10;
	second = Math.floor(Math.random() * (50)) +1;
    var signValue;
    if (first > second && first % second == 0 && second != 0) {
        signValue = getSignWithDivision();
    }
    else {
        signValue = getSign();
    }
	var trueResult;
	if(signValue == 1) {
		trueResult = first + second;
	} else if (signValue == 2) {
		trueResult = first - second;
    } else if (signValue == 3) {
        trueResult = first * second;
    } else if (signValue == 4) {
        trueResult = first / second;
    }
	setValues(first,second,signValue,trueResult, 2);
}

function setThirdGroupStatement() {
	isStatementTrue();
	first = Math.floor(Math.random() * (51)) +50;
	second = Math.floor(Math.random() * (91)) +10;
    if (first > second && first % second == 0 && second != 0) {
        signValue = getSignWithDivision();
    }
    else {
        signValue = getSign();
    }
	var trueResult;
	if(signValue == 1) {
		trueResult = first + second;
	} else if (signValue == 2) {
		trueResult = first - second;
    } else if (signValue == 3) {
        trueResult = first * second;
    } else if (signValue == 4) {
        trueResult = first / second;
    }
	setValues(first,second,signValue,trueResult, 3);
}


function isStatementTrue() {
	var a = Math.floor(Math.random() * (2)) +1;
	if(a == 1) {
		isTrue = false;
	} else {
		isTrue = true;
	}
}

function setValues(a, b, c, d, e) {
	var statementResult;
	var falseResult;

	if(c == 1 ) {
		statementResult = "" + a + "+" + b;
	} else if (c==2) {
		statementResult = "" + a + "-" + b;
	} else if (c == 3) {
		statementResult = "" + a + "x" + b;
	}
	else if (c == 4) {
		statementResult = "" + a + "/" + b;
	}
	if(isTrue == true) {
		statementResult += "=" + d;
		statement.innerHTML = statementResult;
	} else {
		if(e == 1) {
		falseResult = d + Math.floor(Math.random() * (5)) -2 ;
		if(falseResult == d) {
			falseResult= d -1;
		}
		statementResult += "=" + falseResult;
		statement.innerHTML = statementResult;
		} else if (e == 2) {
		falseResult = d + Math.floor(Math.random() * (41)) -20 ;
		if(falseResult == d) {
			falseResult= d-11;
		}
		statementResult += "=" + falseResult;
		statement.innerHTML = statementResult;	
		} else {
		falseResult = d + Math.floor(Math.random() * (101)) -100 ;
		if(falseResult == d) {
			falseResult= d -30;
		}
		statementResult += "=" + falseResult;
		statement.innerHTML = statementResult;
		}
	}
	
}

function getSign() {
	return (Math.floor(Math.random() * (3)) + 1);
}

function getSignWithDivision() {
	return (Math.floor(Math.random() * (4)) + 1)
}

function restart() {
	inc=1;
	time=15;
	timer.innerHTML = "" + time;
	score.innerHTML = "Score: 0";
	scoreCount = 0;
	setFirstGroupStatement();
	setTime();
}

