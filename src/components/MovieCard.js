import React from "react"
import NoImage from "../NoImage.jpg"
import { Link } from "react-router-dom";

//const imgUrl = "https://image.tmdb.org/t/p/original";
const imgUrl = "https://image.tmdb.org/t/p/w500";

function MovieCard(props) {
    const posterPath = props.m.poster_path ? `${imgUrl}${props.m.poster_path}` : NoImage;

  return (
    <div className="movie_card">
        <Link to={`/${props.id}`} > 
            <div className="movie_cover">
                {/* <img src={`${imgUrl}${props.m.poster_path}`} alt="Movie Poster" /> */}
                <img src={posterPath} alt="Movie Poster" />
            </div>
            <div className="movie_cardinfo">
                <div className="movie_title">{props.m.title}</div>
            </div>  
        </Link> 
    </div>
  );
}

export default MovieCard;

