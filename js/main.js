$(window).on("load",function(){
	var firstObjects = $('.fadeLeftIn');

	$.each($('.fadeLeftIn'), function(index, el) {
		setTimeout(function(){
	       $(el).removeClass('fadeLeftIn');

	       if (index == (firstObjects.length - 1)) {
	       		$('.fadeUpIn').removeClass('fadeUpIn');
	       };

	    }, ( index * 250 ));
	});
});