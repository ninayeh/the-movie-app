import Carousel from 'react-bootstrap/Carousel';

function HeroImage(props) {
  return ( 
    <Carousel slide="false">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.image} 
          alt={props.title}
        />
        <Carousel.Caption>
          <h3>{props.title}</h3>
          <p>{props.text}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   );
}

export default HeroImage;