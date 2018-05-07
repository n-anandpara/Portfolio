

/*..........For Smooth Scrolling............*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


/*...........Initialize wow file.................*/
	new WOW().init();

/*.............Changing Color on Scrolling....................*/


/*var $document = $(document),
	$element = $('.navbar'),
	FixedTop = 'fixed-top';

	fadeIn = 'fadeIn';

	$document.scroll(function(){
		if ($document.scrollTop() > 100vh) {
			$element.addClass(FixedTop);

			$element.addClass(fadeIn);
		}


		if ($document.scrollTop() < 100vh) {
			$element.removeClass(FixedTop);

			$element.removeClass(fadeIn);
		}
	});*/

	var toggleAffix = function(affixElement, scrollElement, wrapper) {
  
    var height = affixElement.outerHeight(),
        top = wrapper.offset().top;
    
    if (scrollElement.scrollTop() >= top){
        wrapper.height(height);
        affixElement.addClass("affix");
    }
    else {
        affixElement.removeClass("affix");
        wrapper.height('auto');
    }
      
  };
  

  $('[data-toggle="affix"]').each(function() {
    var ele = $(this),
        wrapper = $('<div></div>');
    
    ele.before(wrapper);
    $(window).on('scroll resize', function() {
        toggleAffix(ele, $(this), wrapper);
    });
    
    // init
    toggleAffix(ele, $(window), wrapper);
  });


/*.....................Progress Bar...............................*/

	$('.progressbar').progressBar({
		shadow : true,
		percentage : false,
		animation : true,
		barColor : "#ff7885",
	});
	
	//Menu
	$(".spinDown").click(function() {
		var target = $(this).data("target");
		var scrollFix = -80;
		target = "#" + target;
		$("html,body").animate({
			scrollTop : $(target).offset().top + scrollFix
		}, 1000);
		return false;
	});