$(document).ready(function() {

	var menu = $( '.menu' ).offset();
		$( window ).scroll( function() {
			if ( $( document ).scrollTop() > menu.top ) {
				$( 'nav' ).addClass( 'fixed' );
			} else {
				$( 'nav' ).removeClass( 'fixed' );
			}
	});
});