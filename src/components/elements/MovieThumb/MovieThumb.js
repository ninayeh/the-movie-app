function MovieThumb(props) {
  return ( 
    <div>
      
      <p>ID: {props.movieId}</p>
      <p>Title: {props.movieName}</p>
      <p>Image: {props.image}</p>
    </div>
    
  );
}

export default MovieThumb;