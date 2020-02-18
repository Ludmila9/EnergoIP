;(function($) {
    "use strict";
    
	$('.about-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
        arrows: true,
        infinity: true,
        autoplay: false,
        autoplaySpeed: 1000,
        cssEase: 'ease-out',
        speed: 2500,
        appendDots: '.about-slider__dots',
        prevArrow: '.slick-prev__arrow',
        nextArrow: '.slick-next__arrow',
    });
  

  //   $('.news-slider').slick({
		// slidesToShow: 3,
		// slidesToScroll: 1,
		// dots: true,
  //       arrows: false,
  //       infinity: true,
  //       autoplay: false,
  //       autoplaySpeed: 1500,
  //       arrows: true,
  //       cssEase: 'ease-out',
  //       speed: 2000,
  //       appendDots: '.news-slider__check',
  //   });

var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1800);
    return false;
});
	
  var time = 2, qty = 1;
  $(window).scroll(function(){
    $('#progress').each(function(){
      var
      position = $(this).offset().top,
      topWindow = $(window).scrollTop();

      if (position < topWindow + 800) {
        
        if (qty < 2) {
          $('.progress__qty').addClass('progress__qtyOpacity');
          $('div').each(function(){
            var 
            i = 1,
            num = $(this).data('num'),
            step = 1000 * time / num,
            that = $(this),
            int = setInterval(function(){
              if (i <= num) {
                that.html(i);
              } else {
                qty = qty + 2;
                clearInterval(int);
              }
              i++;
            },step);
          });
        };
      };
    });
  });

  
  var $page = $('html, body');
  $('a[href*="#"]').click(function() {
    $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1800);
    return false;
  });



  $(window).scroll(function() {
    if ($(this).scrollTop() > $(this).height()) {
      $('.top').addClass('active');
    } else {
      $('.top').removeClass('active');
    }
  });
  $('.top').click(function() {
    $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
  });


  $(window).on('load', function() {
    $('.preloader').delay(1000).fadeOut('slow');
  });

  
})(jQuery); 



// MAP - start

// 	var map;
// function initMap() {
//  var myLatLng = { lat: 40.663283, lng: -73.955089 };
//  var myLatLngCenter = { lat: 40.652960, lng: -73.937113 };
//  var map = new google.maps.Map(document.getElementById('map'), {
//    zoom: 13,
//    center: myLatLngCenter,
//    styles: [
//   {
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#f5f5f5"
//       }
//     ]
//   },
//   {
//     "elementType": "labels.icon",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#616161"
//       }
//     ]
//   },
//   {
//     "elementType": "labels.text.stroke",
//     "stylers": [
//       {
//         "color": "#f5f5f5"
//       }
//     ]
//   },
//   {
//     "featureType": "administrative.land_parcel",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "featureType": "administrative.land_parcel",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#bdbdbd"
//       }
//     ]
//   },
//   {
//     "featureType": "administrative.neighborhood",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "featureType": "poi",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#eeeeee"
//       }
//     ]
//   },
//   {
//     "featureType": "poi",
//     "elementType": "labels.text",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "featureType": "poi",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#757575"
//       }
//     ]
//   },
//   {
//     "featureType": "poi.business",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "featureType": "poi.park",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#e5e5e5"
//       }
//     ]
//   },
//   {
//     "featureType": "poi.park",
//     "elementType": "labels.text",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "featureType": "poi.park",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#9e9e9e"
//       }
//     ]
//   },
//   {
//     "featureType": "road",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#ffffff"
//       }
//     ]
//   },
//   {
//     "featureType": "road",
//     "elementType": "labels",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "featureType": "road.arterial",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "featureType": "road.arterial",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#757575"
//       }
//     ]
//   },
//   {
//     "featureType": "road.highway",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#dadada"
//       }
//     ]
//   },
//   {
//     "featureType": "road.highway",
//     "elementType": "labels",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "featureType": "road.highway",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#616161"
//       }
//     ]
//   },
//   {
//     "featureType": "road.local",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "featureType": "road.local",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#9e9e9e"
//       }
//     ]
//   },
//   {
//     "featureType": "transit.line",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#e5e5e5"
//       }
//     ]
//   },
//   {
//     "featureType": "transit.station",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#eeeeee"
//       }
//     ]
//   },
//   {
//     "featureType": "water",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#c9c9c9"
//       }
//     ]
//   },
//   {
//     "featureType": "water",
//     "elementType": "labels.text",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "featureType": "water",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#9e9e9e"
//       }
//     ]
//   }
// ]
//  });
//  var marker = new google.maps.Marker({
//    position: new google.maps.LatLng(40.663283, -73.955089),
//    icon: 'img/marker-map.png',
//    map: map
//  });
// }



// const googleMapsScript = document.createElement('script');
// googleMapsScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB29GFItZiDCx4QqCTDLLAOG30ryMUMxik&callback=initMap';
// document.head.appendChild(googleMapsScript);


// MAP - end

