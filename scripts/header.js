
$(document).ready(function() {
		   	var stickyNavTop = $('.navbar').offset().top;
		   	var stickyNav = function(){
			var scrollTop = $(window).scrollTop(); 
		    if (scrollTop > stickyNavTop) { 
		        $('.navbar').addClass('top');
		    } else {
			    $('.navbar').removeClass('top'); 
		    }
			};

			stickyNav();
			$(window).scroll(function() {
				stickyNav();
			});


var owl = $('.owl-carousel');
  owl.owlCarousel({
      loop:true,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      margin:10,
      nav:false,
      dots:false,
      items: 1,
      autoplay:true,
      smartSpeed:800,
      autoplayTimeout:6000,
      autoplayHoverPause:true
  });

	
});
var btn = $('#to_top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});