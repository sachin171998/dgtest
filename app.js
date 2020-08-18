const active = () => {
  document.getElementById("ss").style.width = "250px";
}

const kkk = () => {
  document.getElementById("ss").style.width = "0";
}

//   type effect 

var typed = new Typed('.type', {
  strings: ['Mobile marketing',
    'Web & App Development',
    'Social marketing',
    'Designing & Branding',
    'Analytics & Insights',
    'Search Engine Optimization',
    'Direct marketing'],

  typeSpeed: 60,
  backSpeed: 60,
  loop: true
});

// first imageslider

jQuery("#carousel").owlCarousel({
  autoplay: true,
  lazyLoad: true,
  loop: true,
  margin: 20,
  /*
 animateOut: 'fadeOut',
 animateIn: 'fadeIn',
 */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 3
    },

    1024: {
      items: 4
    },

    1366: {
      items: 4
    }
  }
});


