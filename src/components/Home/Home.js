import React, { useEffect, useState } from "react"
import { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';
import HeroImage from "../elements/HeroImage/heroImage";
import MovieThumb from "../elements/MovieThumb/MovieThumb";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


function Home() {

  const [heroImage, setHeroImage] = useState("");
  const [movies, setMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  // const [hasMore, setHasMore] = useState(false);

  const [pageNum, setPageNum] = useState(1);

  const loadMore = () => {
    setPageNum(pageNum + 1)
  }

  useEffect(() => {
    const url = `${API_URL}movie/popular?api_key=${API_KEY}&page=${pageNum}`;

    const fetchItem = async () => {
      try {
        const reponse = await fetch(url);
        const json = await reponse.json();
        console.log(json);
        setHeroImage(json.results[0]);
        setMovies(json.results);
        setPageNum(json.page)

      }
      catch (err) {
        console.log("error", err);
        setError(err);
      }
    }

    fetchItem();
  }, [pageNum]);



  return (
    <div className="movie-home">
      <div className="movie-home-full">
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}/${heroImage.backdrop_path}`}
          title={heroImage.original_title}
          text={heroImage.overview}
        />
      </div>
      <Container>
        <h2>movie list</h2>
        <Row xs={2} md={3} className="g-4">
          {movies.map((movie) =>
            <MovieThumb
              key={movie.id}
              movieId={movie.id}
              movieName={movie.original_title}
              image={movie.poster_path ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}/${movie.poster_path}` : './images/no_image.jpg'}
            />
          )
          }
          <Button variant="success" onClick={loadMore}>Load more</Button>
        </Row>
        {/* <div>{isLoading && "Loading..."}</div> */}
        {/* <Button variant="success" onClick={loadMore}>Load more</Button> */}
        <div>{error && "Something wrong"}</div>
      </Container>
    </div>
  );
}

export default Home;