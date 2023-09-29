import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const settings = {
  dots: true,
  autoplay: true,
  fade: true,
  speed: 100,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false, // Disable the arrows
};

const Myslider = () => {
  return (
    <Slider {...settings}>
      <div>
        <img src="image/slideshow/slide1.jpeg" alt="slide1" />
      </div>
      <div>
        <img src="image/slideshow/slide2.jpeg" alt="slide2" />
      </div>
      <div>
        <img src="image/slideshow/slide3.jpeg" alt="slide3" />
      </div>
      <div>
        <img src="image/slideshow/slide4.jpeg" alt="slide4" />
      </div>
      <div>
        <img src="image/slideshow/slide5.jpeg" alt="slide5" />
      </div>
    </Slider>
  );
};

export default Myslider;