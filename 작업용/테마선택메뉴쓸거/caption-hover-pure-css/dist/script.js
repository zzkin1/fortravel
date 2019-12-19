/*var pull 		= jQuery('#pull');
				menu 		= jQuery('nav ul');
				menuHeight	= menu.height();

			jQuery(pull).on('click', function(e) {
				e.preventDefault();
				menu.slideToggle();
			});*/

			jQuery(window).resize(function(){
        		var w = jQuery(window).width();
        		if(w > 320 && menu.is(':hidden')) {
        			menu.removeAttr('style');
        		}
    		});



jQuery( ".view" ).mouseenter(
  function() {
   jQuery('.gallery').find('div').addClass('filter-gray');
    jQuery(this).removeClass('filter-gray');
  }
);

jQuery('.view').mouseleave(
  function(){
  jQuery('.gallery').find('.filter-gray').removeClass('filter-gray');
  }
);