$(function(){

	    // Extra button part start

		$(".extra-btn").click(function(){
			$("html,body").animate({
				scrollTop: 0
			  })
		  })
	  
		  // Extra button part end
	  
		  // scroll part start
	  
		  $(window).scroll(function(){
			  var scrolling = $(this).scrollTop()
	  
			  if(scrolling > 5){
				$(".main-nav").addClass("nav-bg")
			  }
			  else{
				$(".main-nav").removeClass("nav-bg")
			  }
	  
			  if(scrolling > 5){
				$(".extra-btn").fadeIn(200);
			  }
			else{
				$(".extra-btn").fadeOut(200);
			  }
				
		  })
	  
		  // scroll part end

		  var mixer = mixitup('.mixitup');

		  new WOW().init();
			

});


(function($) {
    'use strict';

    $('.html').rProgressbar({
        percentage: 80,
        fillBackgroundColor: '#1abc9c'
    });
    $('.css').rProgressbar({
        percentage: 90,
        fillBackgroundColor: '#2ecc71'
    });



    $('.php').rProgressbar({
        percentage: 75,
        fillBackgroundColor: '#9b59b6'
    });



    $('.javascript').rProgressbar({
        percentage: 65,
        fillBackgroundColor: '#34495e'
    });



    $('.jquery').rProgressbar({
        percentage: 95,
        fillBackgroundColor: '#f1c40f',
        backgroundColor: '#e67e22'
    });

})(jQuery);