$(document).ready(function () {
  // Toggle navigation menu
  document.getElementById("toggle").addEventListener("click", function () {
    const nav = document.getElementById("nav");
    const body = document.body;

    nav.classList.toggle("-right-full");
    nav.classList.toggle("right-0");
    body.classList.toggle("overflow-hidden");
  });

  // Close navigation menu on link click
  document.querySelectorAll("#nav a").forEach(item => {
    item.addEventListener("click", function () {
      const nav = document.getElementById("nav");
      nav.classList.add("-right-full");
      nav.classList.remove("right-0");
      document.body.classList.remove("overflow-hidden");
    });
  });

  // Initialize slick sliders
  $('.projetos').slick({
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: true,
          speed: 300,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          arrows: true,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true
        }
      }
    ]
  });

  $('.parks').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });

  // Toggle accordion and initialize slick sliders within it
  window.toggleAccordion = function (accordionId, iconId) {
    const accordion = document.getElementById(accordionId);
    const icon = document.getElementById(iconId);
    accordion.classList.toggle('hidden');

    if (accordion.classList.contains('hidden')) {
      icon.src = 'assets/images/plus-icon.png';
      icon.alt = 'Icone de Mais';
    } else {
      icon.src = 'assets/images/less-icon.png';
      icon.alt = 'Icone de Menos';
    }

    if (!accordion.classList.contains('hidden')) {
      if (!$(accordion).data('slick-initialized')) {
        $(accordion).find(".center").slick({
          dots: false,
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 3,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });

        $(accordion).find(".big").slick({
          dots: false,
          infinite: true,
          adaptiveHeight: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                centerMode: true,
                variableWidth: true,
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });
        $(accordion).data('slick-initialized', true);
      }
    }
  };
});
