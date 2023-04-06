import React from "react"
import { useParams } from "react-router-dom"
import moment from 'moment'; //for formating date
import ReactPlayer from 'react-player/youtube'
import { ReactComponent as PlayIcon } from '../play.svg';
import NoImage from "../NoImage.jpg"

//"https://api.themoviedb.org/3/movie/76600?api_key=8d689d587d0f1c9bf7c89cc8968a7d18&language=en-US"
// watch providers: https://api.themoviedb.org/3/movie/76600/watch/providers?api_key=8d689d587d0f1c9bf7c89cc8968a7d18

const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "api_key=8d689d587d0f1c9bf7c89cc8968a7d18";
const language = "&language=en-US";  
const imgUrl = "https://image.tmdb.org/t/p/original";
const youtube= "https://www.youtube.com/watch?v=";

function MovieDetails() {
    const params = useParams()
    const id = params.id;
    //console.log(params)
    const [movieDetails, setMovieDetails] = React.useState(null)
    const [genreDetails, setGenreDetails] = React.useState(null)
    const [videoDetails, setVideoDetails] = React.useState([])
    const [isPlaying, setIsPlaying] = React.useState(false);

    const watchUrl=`https://www.themoviedb.org/movie/${id}/watch`;

    //let's assume you want the movie details and videos for a movie. Usually you would think you have to issue two requests. 
    //With append_to_response you can issue a single request.
    //https://api.themoviedb.org/3/movie/157336?api_key={api_key}
    //https://api.themoviedb.org/3/movie/157336/videos?api_key={api_key}

    React.useEffect(() => {
        async function getMovieDetails() {
            const res = await fetch(`${baseUrl}/movie/${id}?${apiKey}${language}&append_to_response=videos`)
            const data = await res.json()
            setMovieDetails(data)
        }
        getMovieDetails()
    }, [params.id])

    React.useEffect(()=> {
        if( movieDetails!== null)
        {
            const g= movieDetails.genres.map(genre=> genre.name).join(', ');
            setGenreDetails(g)

            const v= movieDetails.videos.results.map(video=> ({
                type: video.type,
                official: video.official,
                site: video.site,
                key: video.key 
            }));
            setVideoDetails(v)
        }
    },[movieDetails])  

    function handlePlayClick() {
        setIsPlaying(!isPlaying);
      }

    // To return a single element for the first trailer that matches the criteria find() is used. 
                         
    function watchTrailer() {
        const trailer = videoDetails.find(          
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );
        if (trailer) {
          const youtubeUrl= `${youtube}${trailer.key}`;
          return (
            <div className="watch-trailer">
                {!isPlaying && (
                    <div onClick={handlePlayClick} className="play-icon">
                        <PlayIcon />
                    </div>
                )}
                {isPlaying && 
                    (<div className="video-container">
                        <ReactPlayer
                        url={youtubeUrl}
                        controls={true}
                        width="70%"
                        height="94%"
                        // width="100%"
                        // height="100%"
                        onEnded={handlePlayClick}
                        className={"enlarged-video"}
                        />
                        <div className="close-button-container" onClick={handlePlayClick}>
                            <button className="close-button">X</button>
                        </div>
                    </div>)
                }  
                <div>Watch Trailer</div>       
            </div>
            
          );
        }else {
          return "No trailer found.";
        }
    }

    
  return (
         <div className="movie-detail-container ">
        
            {movieDetails? 
                (
                <div className="movie-detail-grid">

                    <div className="movie-detail-poster">
                        {/* <img className="movie-detail-img" src={`${imgUrl}${movieDetails.poster_path}`} /> */}
                        <img className="movie-detail-img" src={movieDetails.poster_path ? `${imgUrl}${movieDetails.poster_path}` : NoImage} alt="Movie Poster" />
                        <div className="movie-detail-play">
                           
                            <a href={watchUrl}> Watch Availability</a>
                        </div>
                    </div>

                    <div className="movie-detail-info">
                        <div className="movie-detail-title">{movieDetails.original_title}</div>
                        <div className="movie-detail-date-genre"> 
                            <span>{  
                            moment(movieDetails.release_date).format('MM/DD/YYYY')
                            }</span>
                            {genreDetails? genreDetails : "Loading.."}
                        </div>
                        <div className="movie-detail-score-trailer">
                            <div>
                                <span className="movie-detail-score">  {Math.round((movieDetails.vote_average)*10)}% </span>
                                <span>User Score</span>
                            </div>
                           
                            <div>
                            {watchTrailer()} 
                            </div>
                                
                        </div>
                        <div  className="movie-detail-overview">
                        <div className="movie-detail-overview-heading">Overview</div>
                        <p>{movieDetails.overview}</p>
                        </div>
                    </div>

                </div>
                ) 
                : <h1>Movie details loading ... </h1>
            }
        </div>
        );
}

export default MovieDetails;
