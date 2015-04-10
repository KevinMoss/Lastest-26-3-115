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


 function bin2hex() {
	<?php
		$str = "";
		echo bin2hex($str) . "<br>";
		echo pack("H*",bin2hex($str)) . "<br>";?>  

}

$("#input-form").submit(function(bin2hex){
	alert("");
	event.preventDefault();
});
<!-- Begin
// Insert number of questions
var numQues = 16;

// Insert number of choices in each question
var numChoi = 4;

// Insert number of questions displayed in answer area
var answers = new Array(16);

// Insert answers to questions
answers[0] = "MyFirstProgram";
answers[1] = "Public Static Void Main(String[args])";
answers[2] = "String word;";
answers[3] = "for(i=0; i<1; i++)";
answers[4] = "A Compiler";
answers[5] = "System.out.println('Welcome to java')";
answers[6] = "Test.java";
answers[7] = "import javax.swing.JOptionPane;";
answers[8] = "A semicolon (;)";
answers[9] = "10";
answers[10] = "100";
answers[11] = "Braces";
answers[12] = "x is 1";
answers[13] = "CPU";
answers[14] = "**Comment**";
answers[15] = "input.nextInteger();";

// Do not change anything below here ...
function getScore(form) {
  var score = 0;
  var currElt;
  var currSelection;
  for (i=0; i<numQues; i++) {
    currElt = i*numChoi;
    for (j=0; j<numChoi; j++) {
      currSelection = form.elements[currElt + j];
      if (currSelection.checked) {
        if (currSelection.value == answers[i]) {
          score++;
          break;
        }
      }
    }
  }
  score = Math.round(score/numQues*100);
  scor = Math.round(score + numQues-1);
  form.percentage.value = score + "%";
  var correctAnswers = "";
  for (i=1; i<=numQues; i++) {
    correctAnswers += i + ". " + answers[i-1] + "\r\n";
  }
  form.solutions.value = correctAnswers;
}


	
 
 
