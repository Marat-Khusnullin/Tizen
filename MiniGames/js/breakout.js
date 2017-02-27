window.onload = function() {
	setFirstLevel();
	draw();
}

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 3;
var dy = -3;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 5;
var brickColumnCount = 1;
var brickWidth = 50;
var brickHeight = 15;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var score = 0;
var touches = 0;
var lives = 3;
var bricks = [];
var level =1;
var brickCount = 0;


var left = document.getElementById("left");
var right = document.getElementById("right");


document.addEventListener('tizenhwkey', function(e) {
    if (e.keyName === "back") {
        try {
            window.open("index.html");
        	window.close();
        } catch (ignore) {}
    }
});

left.addEventListener("click" , function() {
	if(paddleX > 0 ){
	paddleX-=30;
	}
} );
	

right.addEventListener("click", function () {
	if( paddleX < canvas.width-paddleWidth ) {
	paddleX+=30;
	}
});


function setFirstLevel() {

for(c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
        brickCount+=1;
    }
}
}

function setSecondLevel() {
	bricks = [];
	brickColumnCount =6;
	for(c=0; c<brickColumnCount; c++) {
	    bricks[c] = [];
	    for(r=0; r<5; r++) {
	    	bricks[c][r] = { x: 0, y: 0, status: 0 };
	        }
	    }
	bricks[1][1].status=1;
	bricks[1][3].status=1;
	bricks[4][0].status=1;
	bricks[4][4].status=1;
	for(r=1; r<4; r++) {
		bricks[5][r].status=1;
	}
	
	brickCount=7;
	}
	


function setThirdLevel() {
	bricks = [];
	brickColumnCount =5;
	for(c=0; c<brickColumnCount; c++) {
	    bricks[c] = [];
	    for(r=0; r<5; r++) {
	    	bricks[c][r] = { x: 0, y: 0, status: 0 };
	        }
	    }
	for(c =0; c< brickColumnCount; c++) {
		for(r=0; r<5; r++) {
			if(c==r || 4-c==r) {
	    	bricks[c][r] = { x: 0, y: 0, status: 1 };
	    	brickCount+=1;
			}
	   }
		
	}
}


function setFourthLevel() {
	bricks = [];
	brickColumnCount =7;
	brickRowCount=5;
	for(c=0; c<7; c++) {
	    bricks[c] = [];
	    for(r=0; r<5; r++) {
	    	bricks[c][r] = { x: 0, y: 0, status: 0 };
	        
	    	 }
	    }
	for(r=0; r<5; r++) {
		bricks[6][r].status = 1;
		brickCount+=1;
	}
	
	for(c =0; c<5; c ++) {
		for(r = 0; r<5; r++){
			if(((c+r) % 2 !=0)) {
			bricks[c][r].status = 1;
			brickCount+=1;
			}
		}
	}
	bricks[5][2].status = 1;
	brickCount+=1;
}


function setFifthLevel() {
	bricks = [];
	brickColumnCount =8;
	brickRowCount=5;
	for(c=0; c<brickColumnCount; c++) {
	    bricks[c] = [];
	    for(r=0; r<brickRowCount; r++) {
	    	bricks[c][r] = { x: 0, y: 0, status: 0 };
	        
	    	 }
	    }
	
	for(c=0; c<brickColumnCount; c++) {
		bricks[c][2].status = 1;
		brickCount+=1;
	}
	
	for(c=1; c<6; c+=2) {
		for(r =0; r<brickRowCount; r++) {
			bricks[c][r].status = 1;
			brickCount+=1;
		}
	}
}


function setRandomLevel() {
	var bool;
	bricks = [];
	brickColumnCount = Math.floor(Math.random()*(6)) + 3;
	brickRowCount=5;
	for(c=0; c<brickColumnCount; c++) {
	    bricks[c] = [];
	    for(r=0; r<brickRowCount; r++) {
	    	bricks[c][r] = { x: 0, y: 0, status: 0 };
	         }
	    }
	
	for(c=0; c<brickColumnCount; c++) {
		for (r=0; r< brickRowCount; r++ ) {
			bool = Math.floor(Math.random()*(2));
			bricks[c][r].status = bool;
			if(bool == 1) {
				brickCount+=1;
			}
		}
	}
}

function buttonDownHandler( count) {
	if(count == 1) {
		rightPressed = true;
	} else 
		if(count == 0) {
			leftPressed = true;
		}
}

function buttonUpHandler(count) {
	if(count == 1) {
		rightPressed = false;
	} else 
		if(count == 0) {
			leftPressed = false;
		}
}

function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth/2;
    }
}
function collisionDetection() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1) {
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                    dy = -dy;
                    var dzin = new Audio('sounds/dzin.wav');
                    dzin.play();
                    b.status = 0;
                    score++;
                    touches+=1;
                    if(touches == brickCount) {
                        reloadLocations();
                        setLevel();
                    	 
                    	
                   
                    }
                }
            }
        }
    }
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0E6AB2";
    ctx.fill();
    ctx.closePath();
}
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#BA0606";
    ctx.fill();
    ctx.closePath();
}
function drawBricks(count) {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
            if(bricks[c][r].status == 1) {
                var brickX = (r*(brickWidth+brickPadding))+brickOffsetLeft;
                var brickY = (c*(brickHeight+brickPadding))+brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#F01616";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}
function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText("Score: "+score, 8, 20);
}


function drawLevel() {
	ctx.font = "20px Arial";
	ctx.fillStyle = "#000000";
	ctx.fillText("Level "+level,canvas.width/2 - 33, 20);
	
}
function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText("Lives: "+lives, canvas.width-65, 20);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    drawScore();
    drawLives();
    drawLevel();
    collisionDetection();
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy < ballRadius) {
        dy = -dy;
    }
    else if(y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
            lives--;
            if(!lives) {
                alert("GAME OVER");
                document.location.reload();
            }
            else {
            	
                x = canvas.width/2;
                y = canvas.height-30;
                paddleX = (canvas.width-paddleWidth)/2;
            }
        }
    }
    
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
   
    x += dx;
    y += dy;
    setTimeout(draw, 10);
}


function setLevel() {
	if(level == 1) {
    	setSecondLevel();
    	level+=1;
    	} else if (level == 2) {
    		setThirdLevel();
    		level+=1;
    		} else if (level ==3) {
    			setFourthLevel();
        		level+=1;
    		} else if (level ==4) {
    			setFifthLevel();
    			level+=1;
    		} else {
    			setRandomLevel();
    		}
}

function reloadLocations() {
	x = canvas.width/2;
	y = canvas.height-30;
	lives = 3;
	touches = 0;
	paddleX = (canvas.width-paddleWidth)/2;
	brickCount =0;
	
}


