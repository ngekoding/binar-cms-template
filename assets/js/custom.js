$(document).ready(function() {

	// Dropdown menu
	$('.sidebar-menu li').click(function() {
		
		$('.sidebar-menu li').find('ul').slideUp();
		$('.sidebar-menu li').find('a').removeClass('active');

		$(this).find('ul:first').slideToggle();

		var itemMenu = $(this).find('a:first');

		if (itemMenu.hasClass('active')) {
			itemMenu.removeClass('active');
		} else {
			itemMenu.addClass('active');
		}
	});
});