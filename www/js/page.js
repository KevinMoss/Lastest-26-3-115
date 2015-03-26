function Page(id, title, desc, color, filename) {
	this.id = id;
	this.title = title;
	this.desc = desc;
	//this.file = file;
	this.color = color;
	this.filename = filename;
	
	this.getHTML = function() {
		var html = '<div id="'+this.id+'" class="page-container">';
		html += '<div class="page" onclick="OpenPage(this,\''+ this.color +'\',\''+ this.filename +'\' );">';
		html += '<div class="page-header" style="background-color:'+this.color+'">';
		html += '<h1>'+this.title+'</h1>';
		html += '<h2>'+this.desc+'</h2>';
		html += '</div>';
		html += '<div class="page-header-controls">';
		html += '<div class="flat-button"><p>Highscore: 0</p></div>';
		html += '</div></div></div>';
		
		return html;
	}
	
}

var pageOpen = false;
var openPage = null;
var scrollPos = 0;

function OpenPage(el, theme, filename) {
	
	if (!pageOpen) {
		$('#temp').remove();
		var tempStyle = '<style id="temp">';
		tempStyle += '.theme { background-color: ' + theme + ' !important;}';
		tempStyle += '.spinner:not(:required):before { border-top-color: '+theme+'; }';
		tempStyle += '</style>';
		$(tempStyle).appendTo('head');

		openPage = el;

		pageOpen = true;
		var offsetTop = $(el).offset().top;
		offsetTop = offsetTop - $(".header").outerHeight();
		
		var sheight = screen.height;
		
		//$(el).addClass("raise-element");

		scrollPos = $('body').scrollTop();
		
		$(el).addClass("page-open"); 

		$(el).transition({y:-offsetTop+scrollPos, width: screen.width, x: -8},353, 'ease');
		$(el).children('.page-header-controls').transition({opacity:0},353);
		setTimeout(function() {
			$('#page-content .ajax-content').css("opacity", 0);
			$('#page-content').show();
			$(el).removeClass("page-shadow");
			$('#page-content').transition({y : sheight},400, 'ease-out');
			
			setTimeout(function() {
				$('.main-container').addClass("no-scroll");
				$(el).css("margin-top", -scrollPos);
				setTimeout(function(){LoadPage(filename);}, 1000);
			},400);
			
		},353);
		
		ToggleBackButton();
		
		/*setTimeout(function() {
			$(el).children('.page-content').fadeIn();
		},1200);*/
		
	}	
}
 
 function LoadPage(filename) {

	$('#page-content .ajax-content').load(filename, function(){
		$('#page-content .spinner').transition({opacity : 0},function(){
			$('#page-content .spinner').hide();
			$('#page-content .spinner').css("opacity",1);
			$('#page-content .ajax-content').transition({opacity : 1});
		});
	});
 }
 
function PageClosingFunction() {
	this.run = function (){ return true; }
}

var PageClosing = new PageClosingFunction();
 
function ClosePage() {
	if (pageOpen) {
		
		if(!PageClosing.run()) {
			return;
		}
		PageClosing = new PageClosingFunction();
		ToggleBackButton(); 
		
		var el = openPage;
		pageOpen = false;
		
		$('.main-container').removeClass("no-scroll");
		$(el).css("margin-top", 0);
		$('body').scrollTop(scrollPos);
		
		$('#page-content').transition({y : 0},400, 'ease-out');
		$('#page-content .ajax-content').transition({opacity:0},300);
		setTimeout(function() {
			$('#page-content').hide();
			$('#page-content .ajax-content').empty();
			$('#page-content .spinner').show();
			$(el).addClass("page-shadow");
			$(el).transition({y:0, width: screen.width-18, x: 0},353, 'ease');
			
		},400);
		
		setTimeout(function() {
			$(el).removeClass("page-open");
			$('.main-container').removeClass("no-scroll");
			$(el).children('.page-header-controls').transition({opacity:1},353);
		},753);
	}	
}