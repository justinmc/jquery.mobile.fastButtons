// jquery.mobile.fastButtons.js
// Justin McCandless
// justinmccandless.com
// jQuery 1.6.4+
// jQuery Mobile 1.0.1+

// This jQuery Mobile plugin makes click events faster, especially iOS
// It does this by simply replacing 'click' events on document with 'vclick'

var fastButtons = {
	
	replace: function() {
		// copy the current click events on document
		var clickEvents = jQuery.hasData( document ) && jQuery._data( document ).events.click;
		clickEvents = jQuery.extend(true, {}, clickEvents);
		
		// remove these click events
		$(document).off('click');
	
		// reset them as vclick events
		for (var i in clickEvents) {
			$(document).on('vclick', clickEvents[i].handler);
		}
	}
};

// Call fastbuttons and replace all click events with vclick
$(document).ready(function() {
    fastButtons.replace();
});
