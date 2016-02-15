'use strict';

$(document).ready( function() {
  
	$('.isotope').isotope({
		itemSelector: '.element-item',
		masonry: {
  			isFitWidth: true
		}
	});

    $(".fancybox").fancybox({
        padding : 0,
        helpers : {
            overlay : {
                css : {
                    'background' : 'rgba(22, 27, 27, 0.95)'
                }
            }
        }
    });
    // Scroll To
    $('a').bind('click',function(event){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1300,'easeInOutExpo');
        event.preventDefault();
    });



    $( function() {

        var $container = $('.isotope'),
            $body = $('body'),
            colW = 60,
            columns = null;
      // init Isotope
      var $container = $('.isotope').isotope({
        itemSelector: '.element-item',
      });

      setTimeout(function() {
            var filterValue = '';
            $container.isotope({ filter: filterValue });
      }, 1000);
      
      // filter functions
      var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function() {
          var number = $(this).find('.number').text();
          return parseInt( number, 10 ) > 50;
        },
        // show if name ends with -ium
        ium: function() {
          var name = $(this).find('.name').text();
          return name.match( /ium$/ );
        }
      };
      // bind filter button click
      $('#filters').on( 'click', 'button', function() {
        var filterValue = $( this ).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[ filterValue ] || filterValue;
        $container.isotope({ filter: filterValue });
      });
      // change is-checked class on buttons
      $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
          $buttonGroup.find('.is-checked').removeClass('is-checked');
          $( this ).addClass('is-checked');
        });
      });
      
    });



  var mapWidth = $('.map').width();
  $('.map-overlay').width(mapWidth);

  $("#top").backstretch("/assets/img/cover.jpg");
  var coverHeight = $('.backstretch').height();
  $('.overlay').height(coverHeight);



    
});
