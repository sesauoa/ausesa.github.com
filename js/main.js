$(document).ready(function() {
	$('#menu_button').on('click', function () {
		$('#mobile_menu').toggle();
	});

	var i = 0;
	var TOTAL_BANNERS = 4;
	setInterval(function () {
		if (i >= TOTAL_BANNERS) {i = 0}
		$('#banner_image').attr('src', '/img/banner/' + i + '.jpg');
		i++;
	}, 5000);
});
