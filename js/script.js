(function($) {
  "use strict";

  // init Isotope
  var initIsotope = function() {
    
    $('.grid').each(function(){

      // $('.grid').imagesLoaded( function() {
        // images have loaded
        var $buttonGroup = $( '.button-group' );
        var $checked = $buttonGroup.find('.is-checked');
        var filterValue = $checked.attr('data-filter');
  
        var $grid = $('.grid').isotope({
          itemSelector: '.portfolio-item',
          // layoutMode: 'fitRows',
          filter: filterValue
        });
    
        // bind filter button click
        $('.button-group').on( 'click', 'a', function(e) {
          e.preventDefault();
          filterValue = $( this ).attr('data-filter');
          $grid.isotope({ filter: filterValue });
        });
    
        // change is-checked class on buttons
        $('.button-group').each( function( i, buttonGroup ) {
          $buttonGroup.on( 'click', 'a', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
          });
        });
      // });

    });
  }

  // var initScrollNav = function() {
  //   var scroll = $(window).scrollTop();
  //   console

  //   if (scroll >= 200) {
  //     $('#header.fixed-top').addClass("bg-white");
  //   }else{
  //     $('#header.fixed-top').removeClass("bg-white");
  //   }
  // }

  // init Chocolat light box
  var initChocolat = function() {
    Chocolat(document.querySelectorAll('.image-link'), {
      imageSize: 'contain',
      loop: true,
    })
  }

  // ------------------------------------------------------------------------------ //
	// Overlay Menu Navigation
	// ------------------------------------------------------------------------------ //
	var overlayMenu = function () {

		if(!$('.nav-overlay').length) {
		  return false;
		}

		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;
		var init = function init() {
		  body = document.querySelector('body');
		  menu = document.querySelector('.menu-btn');
		  menuItems = document.querySelectorAll('.nav__list-item');
		  applyListeners();
		};
		var applyListeners = function applyListeners() {
		  menu.addEventListener('click', function () {
		    return toggleClass(body, 'nav-active');
		  });
		};
		var toggleClass = function toggleClass(element, stringClass) {
		  if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
		};
		init();
	}

  $(document).ready(function(){
    overlayMenu();
    initChocolat();
    
    AOS.init({
      duration: 1000,
      once: true
    })

    $('#btn-menu').click(function(e){
      e.preventDefault();
      $('.sidebar-menu').toggleClass('open');
    })

  }); // End of a document

  $(window).load(function () {
    initIsotope();
  });

})(jQuery);