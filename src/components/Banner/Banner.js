import React from "react";
import { Carousel } from "react-bootstrap";
import './Banner.css'

function Banner() {
  return (
    <div className="banner">
      <Carousel>
        <Carousel.Item>
          <img
            className="image"
            src="http://new-hls.s3.amazonaws.com/hls/data/2489/website/general/bn/banner-1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/f6abfe63363741.5aae97453a9cd.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image"
            src="https://mascola.com/wp-content/uploads/2014/09/the-palm-962785_960_720.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner