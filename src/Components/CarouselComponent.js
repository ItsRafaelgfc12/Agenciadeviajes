import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../Images/Munayperu2.jpg';
import image2 from '../Images/image2.jpg';
import image3 from '../Images/image3.jpg';
import './CarouselComponent.css';

const IndividualIntervalsExample = () => {
  return (
    <div className="carousel">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={image1} alt="Primera imagen" />
          <Carousel.Caption>
            <h3>Primera imagen</h3>
            <p>Disfruta de los mejores destinos.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src={image1} alt="Segunda imagen" />
          <Carousel.Caption>
            <h3>Segunda imagen</h3>
            <p>Un viaje inolvidable.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="Tercera imagen" />
          <Carousel.Caption>
            <h3>Tercera imagen</h3>
            <p>Explora nuevas aventuras.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default IndividualIntervalsExample;

