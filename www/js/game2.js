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


	
 
 
