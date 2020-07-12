(function($) {
	
	$('nav a').click(function(e) {
		// Hide the menu once clicked if mobile
        if ($('nav').hasClass('active')) {
            $('nav, body').removeClass('active');
        }
    });
	// Open mobile menu
    $('#mobile-menu-open').click(function() {
        $('nav, body').addClass('active');
    });

    // Close mobile menu
    $('#mobile-menu-close').click(function() {
        $('nav, body').removeClass('active');
    });
})(jQuery);