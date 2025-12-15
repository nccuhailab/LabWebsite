/* HAI Lab Custom Menu JavaScript */

(function($) {
	
	$(document).ready(function() {
		
		// Handle submenu hover
		$('#menu .links li.has-submenu').hover(
			function() {
				// Mouse enter
				$(this).addClass('active');
			},
			function() {
				// Mouse leave
				$(this).removeClass('active');
			}
		);
		
		// Handle parent link clicks (allow navigation to Research page)
		$('#menu .links li.has-submenu > a').on('click', function(event) {
			var href = $(this).attr('href');
			
			event.preventDefault();
			event.stopPropagation();
			
			// Hide menu
			$('body').removeClass('is-menu-visible');
			
			// Navigate after animation
			window.setTimeout(function() {
				window.location.href = href;
			}, 350);
		});
		
		// Handle submenu item clicks (allow navigation)
		$('#menu .links .submenu a').on('click', function(event) {
			var href = $(this).attr('href');
			
			event.preventDefault();
			event.stopPropagation();
			
			// Hide menu
			$('body').removeClass('is-menu-visible');
			
			// Navigate after animation
			window.setTimeout(function() {
				window.location.href = href;
			}, 350);
		});
		
	});
	
})(jQuery);