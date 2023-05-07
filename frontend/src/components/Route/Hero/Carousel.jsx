import { one, two, three, four } from "../../../Assests/img/index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Slides, Container, CarouselContainer } from "./styles/Carousel.styled";
import * as globals from "./styles/general.styled";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Carousel = () => {
  const sliderSettings = {
    // ...
    fade: true,
    speed: 1500, // ms
    autoplay: true,
    initialSlide: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

    responsive: [
      {
        breakpoint: 328,
        settings: {
          autoplay: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          autoplay: true,
          width: "700px",
        },
      },
    ],
  };
  const images = [one, two, three, four];

  return (
    <CarouselContainer>
      <Slider {...sliderSettings}>
        {images.map((card, index) => (
          <Slides bg={card} key={index}>
            <Container>
              <h4>New arrivals</h4>
              <h1>
                <globals.StyledLink to="/Seasonals">
                  Summer Outfits
                </globals.StyledLink>
              </h1>
              <h1>
                <globals.StyledLink to="/Furniture">
                  Furniture Collection
                </globals.StyledLink>
              </h1>

              <Link to="/products" className="inline-block">
                <div className={`${styles.button} mt-5`}>
                  <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Shop Now
                  </span>
                </div>
              </Link>
            </Container>
          </Slides>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export { Carousel };
