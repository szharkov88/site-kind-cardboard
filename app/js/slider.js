$(document).ready(function () {
	$(function(){
		 $('.slider-for').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  fade: true,
		  asNavFor: '.slider-nav'
		});
		$('.slider-nav').slick({
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  asNavFor: '.slider-for',
		  dots: false,
		  centerMode: true,
		  focusOnSelect: true,
		  prevArrow: '<button class="prev1 arrow1"></button>',
		  nextArrow: '<button class="next1 arrow1"></button>'
		});
		

	});
	})


$('.feedback-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  
  prevArrow: '<button class="prev2 arrow2"></button>',
  nextArrow: '<button class="next2 arrow2"></button>',
  responsive: [
  
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
     
      }
    }
    
  ]

  
});

