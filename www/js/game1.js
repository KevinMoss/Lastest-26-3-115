  
 /***********************************************/
 /*					ON PAGE LOAD				*/
 /***********************************************/
 
 $('.game-play').hide();
 $('.keypad-key').addClass("waves-effect waves-green");
 $('.keypad-key').on('touchend',function() {
	var tanswer = $('#answer').text();
	
	if ($(this).attr("id") == "key-clear") {
		$('#answer').text('');
		return;
	}
	
	if ($(this).attr("id") == "key-back") {
		
		if (tanswer.length <= 1) {
			$('#answer').text('');
			return;
		}
	
		$('#answer').text(tanswer.substr(0,tanswer.length-1));
		return;
	}
	
	var key = $(this).text();
	var tanswer = $('#answer').text();
	
	$('#answer').text(tanswer+key);
 });
 
 PageClosing.run = function() {
	clearInterval(timer);
	
	var r = confirm("Are you sure you want to quit the game?");
	
	if (r) {
		return true;
	}
	
	timer = setInterval(Countdown,1000);
	return false;
	
 }
 
 /***********************************************/
 /*					FUNCTIONS					*/
 /***********************************************/
 
 function GetAnswer() {
	if ($('#answer').text() == answer.toString()) {
		//alert("Correct");
		score ++;
	}
	else {
		return;
	}
	$('#answer').text('');
	$('#score').text(score);
	CreateSum();
 }
 
 var answer;
 var score;
 
 function CreateSum() {
	var x = Math.floor((Math.random() * 10) + 1);
	var y = Math.floor((Math.random() * 10) + 1);
	
	answer = x + y;
	
	$('#sum').text(x + ' + ' + y + ' = ');
 }

 var timer;
 var timeLeft = 60;
 
function StartGame() {
	timeLeft = 60;
	

	setTimeout(function() {
		$('.game-intro').transition({opacity:0}, 300, function() {
			$('.game-intro').hide();
			$('.game-play').css("opacity", 0);
			$('.game-play').show();
			$('.game-play').transition({opacity: 1},300, function() {
				score = 0;
				CreateSum();
				timer = setInterval(Countdown,1000);
			});
		});		
	},400);
	
}

function GameOver() {
	clearInterval(timer);
}

function Countdown() {
	timeLeft--;
	$('#timer').text(timeLeft);
					
	if (timeLeft == 0) {
		GameOver();
	}
}
