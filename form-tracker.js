(function($) {
$(document).ready(function() { 
	$(':input').blur(function () {
		if($(this).val().length > 0) {
			dataLayer.push({
				'event': 'form touch',
				'eventCategory': 'form tracking',
				'eventAction': 'completed',
				'eventLabel': $(this).closest('form').attr('class') + ' : ' + $(this).attr('name')
			});
		} 
		else {
			dataLayer.push({
				'event': 'form touch',
				'eventCategory': 'form tracking',
				'eventAction': 'skipped',
				'eventLabel': $(this).closest('form').attr('class') + ' : ' + $(this).attr('name')
			});
		}
	});
});
})(jQuery);
