/*-----MOBILE MENU SCRIPT-----*/
$(document).ready(function () {
  $("#menu-open").click(function (e) {
    e.preventDefault();
    $("#mobile-menu").toggleClass("opened");
  });
  $("#menu-close").click(function (e) {
    e.preventDefault();
    $("#mobile-menu").toggleClass("opened");
  });
});

/*-----WORKS SLIDER-----*/
$(document).ready(function () {
  let $slider = $(".works-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  });
  $("#works-prev").click(function (e) {
    e.preventDefault();
    $slider.slick("slickPrev");
  });
  $("#works-next").click(function (e) {
    e.preventDefault();
    $slider.slick("slickNext");
  });
});

/*------TEAM SLIDER-------*/

$(document).ready(function () {
  let $slider = $(".team-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
  $("#team-prev").click(function (e) {
    e.preventDefault();
    $slider.slick("slickPrev");
  });
  $("#team-next").click(function (e) {
    e.preventDefault();
    $slider.slick("slickNext");
  });
});

/*----SCROLL----*/
$(document).ready(function () {
  $(`a[href^="#"]`).click(function () {
    let elementClick = $(this).attr("href");
    let destination = $(elementClick).offset().top;
    $("html").animate({ scrollTop: destination }, 1000);
  });
});
$(document).ready(function () {
  $(window).scroll(function () {
    if (pageYOffset >= 10) {
      $(".header-nav-container").addClass("scrolled");
    } else {
      $(".header-nav-container").removeClass("scrolled");
    }
  });
});

/*----MAP----*/
function initMap() {
  var ternopil = { lat: 49.5495028, lng: 25.5915303 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: ternopil,
    styles: [
      {
        elementType: "geometry",
        stylers: [
          {
            color: "#f5f5f5",
          },
        ],
      },
      {
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#616161",
          },
        ],
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#f5f5f5",
          },
        ],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#bdbdbd",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#eeeeee",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          {
            color: "#e5e5e5",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#dadada",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#616161",
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e",
          },
        ],
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [
          {
            color: "#e5e5e5",
          },
        ],
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [
          {
            color: "#eeeeee",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#c9c9c9",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e",
          },
        ],
      },
    ],
  });

  var marker = new google.maps.Marker({
    position: { lat: 49.5495028, lng: 25.5915303 },
    icon: "images/map_marker.png",
    map: map,
  });
}
