import React, { useEffect, useState } from "react"
import {API_URL,API_KEY,IMAGE_BASE_URL,BACKDROP_SIZE} from '../../config';
import HeroImage from "../elements/HeroImage/heroImage";

function Home() {
  const [heroImage, setHeroImage] = useState("")
 
  
  useEffect(() => {
    const url = `${API_URL}movie/popular?api_key=${API_KEY}`;

    const fetchItem = async() => {     
      try {
        const reponse = await fetch(url);
        const json = await reponse.json();
        console.log(json);
        setHeroImage(json.results[0]);
      }
      catch(err) {
        console.log("error", err);
      }
    }

    fetchItem();

  }, []);

  
  
  return (
    <div className="movie-home">
       <h1>Home</h1>
       <div className="movie-home-full">
          <HeroImage 
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}/${heroImage.backdrop_path}`}
            title={heroImage.original_title}
            text={heroImage.overview}
          />
       </div>
       <div className="movie-home-grid">
          <h2>movie list</h2>
       </div>
    </div>
  ); 
}

export default Home;