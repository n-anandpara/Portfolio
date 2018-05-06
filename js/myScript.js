

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


var $document = $(document),
	$element = $('.navbar'),
	FixedTop = 'fixed-top';

	fadeIn = 'fadeIn';

	$document.scroll(function(){
		if ($document.scrollTop() > 640) {
			$element.addClass(FixedTop);

			$element.addClass(fadeIn);
		}


		if ($document.scrollTop() < 640) {
			$element.removeClass(FixedTop);

			$element.removeClass(fadeIn);
		}
	});


/*.....................Progress Bar...............................*/

	$('.progressbar').progressBar({
		shadow : true,
		percentage : false,
		animation : true,
		barColor : "#527AF9",
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