$(document).ready(function(){
	
	/*
     * Replace all SVG images with inline SVG
     */
	/*
	jQuery('.svg').each(function(){
	    var $img = jQuery(this);
	    var imgID = $img.attr('id');
	    var imgClass = $img.attr('class');
	    var imgURL = $img.attr('src');

	    jQuery.get(imgURL, function(data) {
	        // Get the SVG tag, ignore the rest
	        var $svg = jQuery(data).find('svg');

	        // Add replaced image's ID to the new SVG
	        if(typeof imgID !== 'undefined') {
	            $svg = $svg.attr('id', imgID);
	        }
	        // Add replaced image's classes to the new SVG
	        if(typeof imgClass !== 'undefined') {
	            $svg = $svg.attr('class', imgClass+' replaced-svg');
	        }

	        // Remove any invalid XML tags as per http://validator.w3.org
	        $svg = $svg.removeAttr('xmlns:a');

	        // Replace image with new SVG
	        $img.replaceWith($svg);
	        console.log("test");
	    }, 'xml');
    });
    */
	var l2RElement = [];
	var r2lElement = [];
	var elementsDOM = {};
	var elementsOffset = {};
	var initialLeft = {};
	var initStar = true;

	function getOffset(element) {
	    var rect = element.get(0).getBoundingClientRect()
	    var top  = rect.top + $(window).scrollTop();
	    var left = rect.left + $(window).scrollLeft();
	    return { top: Math.round(top), left: Math.round(left) }
	}


	function initL2RElemnt (element){
		element.css({'left': '-200px'})
		elementsDOM[element.selector] = element.get(0);
		initialLeft[element.selector] = -200;
		elementsOffset[element.selector] = getOffset(element);
	}

	function initR2LElemnt (element){
		element.css({'left': '200px'})
		elementsDOM[element.selector] = element.get(0);
		initialLeft[element.selector] = 200;
		elementsOffset[element.selector] = getOffset(element);
	}

	function isAboveBottomLine (element){
		// console.log(elementsOffset[element.selector].top + ' <= ' + ($(window).scrollTop() + $(window).innerHeight()));
		if(elementsOffset[element.selector].top <= $(window).scrollTop() + $(window).innerHeight()){	
			return true;
		}else{
			return false;
		}
	}

	function stepToMove(selector, left){
		var step = ($(window).scrollTop() + $(window).innerHeight()) - elementsOffset[selector].top;
		var initLeft = initialLeft[selector];
		step = step/1.5;
		if (step <= 200 && step >= 0) {
			step = initLeft + step;
		} else if ( step > 200) {
			step = initLeft+200 ;
		} else {
			step = initLeft;
		}

		if (left){
			return step;
		}else{
			return 400 - step;
		}
	}

	function stepToOpenClose(){
		return $(window).scrollTop() + $(window).innerHeight()/2;
	}

	function throwStar(callback){
		$('.starIntro').addClass('rotateStar');
		$('.starBox').animate({left:"110%"}, 900);
		setTimeout(function(){
			$('.intro1').animate({bottom:'+=1'}, 150, function(){
				$('.starBox').css('left','-60px');
				$('.starIntro').removeClass('rotateStar');

				callback();
			});
		},800);
		// $('.intro2').stop(true, true).delay(1200).animate({top:'+=1'}, { duration: 120, queue:false});
		// $('.starIntro').animate({transform:'rotate(360deg)'}, { duration: 1200, queue: false });
	}

	function handleStar(){
		if (initStar && $(window).scrollTop() > 0) {
			$(window).scrollTop(0);
			$('body').addClass('stop-scrolling');
			throwStar(function(){
				$('body').removeClass('stop-scrolling')
				initStar = false;
				$(window).scrollTop(1);

			});
		};

		if ($(window).scrollTop() === 0) {
			initStar = true;
		}
	}

	$('.moveL2R').each(function(){
		var element = $('#'+this.id);
		l2RElement.push(element);
		
		initL2RElemnt(element);
	});

	$('.moveR2L').each(function(){
		var element = $('#'+this.id);
		r2lElement.push(element);
		
		initR2LElemnt(element);
	});

	// throwStar();
	$(window).scroll(function(event){
		handleStar();

		l2RElement.forEach(function(element){
			if(isAboveBottomLine(element) ){	
				element.css('left', stepToMove(element.selector, true) );
			} else if (!isAboveBottomLine(element)){
				element.css('left', initialLeft[element.selector]);
			}
		});

		r2lElement.forEach(function(element){
			if(isAboveBottomLine(element) ){	
				element.css('left', stepToMove(element.selector, false) );
			} else if (!isAboveBottomLine(element)){
				element.css('left', initialLeft[element.selector]);
			}
		});

		$('.intro1').css('bottom', stepToOpenClose());
		$('.intro2').css('top', stepToOpenClose());
	});
});