(function($) {
$(document).ready(function() { 
	$(':input').blur(function () {
		if($(this).val().length > 0) {
			dataLayer.push([
				'event': '_trackEvent',
				'eventCategory': $(this).closest('form').attr('id'),
				'eventAction': 'completed',
				'eventLabel': $(this).attr('name')
			]);
		} 
		else {
			dataLayer.push([
				'event': '_trackEvent',
				'eventCategory': $(this).closest('form').attr('id'),
				'eventAction': 'skipped',
				'eventLabel': $(this).attr('name')
			]);
		}
	});
});
})(jQuery);
