(function(){
	
	// $('head').append('<link href="setup_panel/setup_panel.css" rel="stylesheet">');

	//dynamic panel styling and positioning
	var panelSlideSpeed = 800, //panel sliding speed in milliseconds
		panelEasing = 'easeOutExpo',
		panelMoveTo = 250; //set the panel width

	$('.setup_panel').show();	

	$('.setup_panel').css('left',-panelMoveTo).css('width',panelMoveTo);
	$('.setup_ico').css('left',panelMoveTo);

	$('.setup_ico').toggle(function(){
		$('.setup_panel').animate({
			left: 0
		},panelSlideSpeed,panelEasing)
	},function(){
		$('.setup_panel').animate({
			left: -panelMoveTo
		},panelSlideSpeed,'easeOutElastic')
	});



	// style change function
	var fontsLink  = $('link[style-type="fonts"]'),
		colorsLink = $('link[style-type="colors"]');
	//console.log(link);

	//switch function
	function changeFunction( link , stylesheet ){

	    link.attr('href', 'css/' + stylesheet + '.css');
	
	}

	//switching trigger 
	$('#accordion div p').on('click',function(){
		var theese = $(this).parent(),
			classFonts = theese.hasClass('fonts_change'),
			classColors = theese.hasClass('colors_change'),
			stylesheet  = $(this).data('property');

		if( classFonts == true ){
			
			changeFunction( fontsLink , stylesheet );
		
		} else if( classColors == true ){
		
			changeFunction( colorsLink , stylesheet ); 
		
		}
	});

	//setup panel accrodion function
	$("#accordion").accordion();

})();