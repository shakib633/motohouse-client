import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
      <Carousel>
      <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://global.honda/products/assets/motorcycles/img/img-hero01_pc.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h1 className="fw-bold">Honda’s “mono-zukuri</h1>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://dd5394a0b8ca8e97ba29-abf76f3d91a2125517d6c7c409f095c7.ssl.cf1.rackcdn.com/content/common/action/2022/936cf732-f8d5-4cac-bad3-8ba7b4b6b39c.jpg"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h1 className="fw-bold">YZF-R1</h1>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.globalsuzuki.com/motorcycle/commons/img/top/main_slide03.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>
        
        
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
};

export default Banner;