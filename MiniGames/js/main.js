window.onload = function() {
    
	
	music = new Audio('sounds/main.mp3'); 
	music.addEventListener('ended', function() {
	    this.currentTime = 0;
	    this.play();
	}, false);
	music.play();
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === "back") {
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (ignore) {}
        }
    });
        
};

    
    var mainPage = document.querySelector('#main');
    

    
    var rps = document.getElementById("mathQuiz");
    rps.addEventListener("click" , function() {
    	window.open("math.html");
    	window.close();
    	
    });
    
    var barley = document.getElementById("barley-break");
    barley.addEventListener("click", function() {
    	window.open("barley-break.html");
    	window.close();
    	
    });
    
    var tictac = document.getElementById("breakout");
    tictac.addEventListener("click", function() {
    	window.open("breakout.html");
    	window.close();
    	
    });
    
    var invert = document.getElementById("invertion");
    invert.addEventListener("click", function() {
    	window.open("invertion.html");
    	window.close();
    	
    });
    
    
    
    
    
    


