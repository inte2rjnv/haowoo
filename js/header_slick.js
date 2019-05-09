$(".header__slider").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    paginationSpeed:9000,
    pauseOnHover: false,
    cssEase: 'linear',
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
          {
            breakpoint: 992,
            settings: {
              centerMode: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          }
        ]
  });
