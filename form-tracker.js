(function($) {
$(document).ready(function() { 
	$(':input').blur(function () {
		if($(this).val().length > 0) {
			_gaq.push(['_trackEvent', $(this).closest('form').attr('id'), 'completed', $(this).attr('name')]);
		} 
		else {
			_gaq.push(['_trackEvent', $(this).closest('form').attr('id'), 'skipped', $(this).attr('name')]);
		}
	});
});
})(jQuery);