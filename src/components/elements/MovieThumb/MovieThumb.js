import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function MovieThumb(props) {
  return ( 
    <Col>
      <Card>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title> {props.movieName}</Card.Title>
          <Card.Text>ID: {props.movieId}</Card.Text>
        </Card.Body>
      </Card>
    </Col>

    // <div>
      
    //   <p>ID: {props.movieId}</p>
    //   <p>Title: {props.movieName}</p>
    //   <p>Image: {props.image}</p>
    // </div>
    
  );
}

export default MovieThumb;