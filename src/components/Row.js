import React from "react"
import MovieCard from "./MovieCard";

function Row(props) {

    const rowList = props.type.map(movie => (
        <MovieCard
            id={movie.id} 
            key={movie.id}
            m={movie} 
        />
      ))

  return (
       <div>
          <div class="MoviesEvents_headings">{props.title}</div>
          <div className="movie">
            {rowList}
          </div>
        </div>
  );
}

export default Row;

