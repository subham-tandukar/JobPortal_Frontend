import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import { Link } from "react-router-dom";

import InterestImg1 from "../../Assets/img/img-1.png";
import InterestImg2 from "../../Assets/img/img-2.png";
import InterestImg3 from "../../Assets/img/img-3.png";
import InterestImg4 from "../../Assets/img/img-4.png";
import InterestImg5 from "../../Assets/img/img-5.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";

export default () => {
  return (
    <Swiper
      modules={[EffectCoverflow]}
      effect="coverflow"
      centeredSlides={true}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 5,
        slideShadows: true,
      }}
      loop={true}
      autoplay={{
        // Autoplay configuration
        delay: 3000, // Delay between transitions (in milliseconds)
      }}
      autoplayTimeout={3000}
      breakpoints={{
        560: {
          slidesPerView: 2.5, // Adjust as needed
        },
        768: {
          slidesPerView: 3, // Adjust as needed
        },
        1024: {
          slidesPerView: 3, // Adjust as needed
        },
      }}
    >
      <SwiperSlide>
        <div className="overlay__content">
          <Link to="#">
            <img src={InterestImg1} alt="" />
            <h3>New Open Restaurants</h3>
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="overlay__content">
          <Link to="#">
            <img src={InterestImg2} alt="" />
            <h3>Hotel On Sell</h3>
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="overlay__content">
          <Link to="#">
            <img src={InterestImg3} alt="" />
            <h3>Restaurant on Sell</h3>
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="overlay__content">
          <Link to="#">
            <img src={InterestImg4} alt="" />
            <h3>Coming Property</h3>
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="overlay__content">
          <Link to="#">
            <img src={InterestImg5} alt="" />
            <h3>Star Hotel</h3>
          </Link>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
