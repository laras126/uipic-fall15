$(document).ready( function() {

	// Open external site links in new tab
	$(document.links).filter(function() {
	    return this.hostname != window.location.hostname;
	}).attr('target', '_blank');

});
