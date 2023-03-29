
//Example trending movies: https://api.themoviedb.org/3/trending/movie/day?api_key=<<api_key>> 
//Popular movies: https://api.themoviedb.org/3/movie/popular?api_key=8d689d587d0f1c9bf7c89cc8968a7d18&include_adult=false&language=en-US&page=1  

//To discover anything: 
//https://developers.themoviedb.org/3/discover/movie-discover
//Also note that a number of filters support being comma (,) or pipe (|) separated. Comma's are treated like an AND and query while pipe's are an OR.
//https://api.themoviedb.org/3/discover/movie?api_key=8d689d587d0f1c9bf7c89cc8968a7d18&language=en-US&sort_by=popularity.desc&with_genres=27&include_adult=false&include_video=false&page=1

//To get list of genres:  Genre= https://api.themoviedb.org/3/genre/movie/list? 
//Or: https://api.themoviedb.org/3/genre/movie/list?api_key=8d689d587d0f1c9bf7c89cc8968a7d18&language=en-US 


import React from "react"
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Row from "./components/Row";

const apiKey = "api_key=8d689d587d0f1c9bf7c89cc8968a7d18";
const baseUrl = "https://api.themoviedb.org/3";
const language = "&language=en-US&page=1";  
const blockContent= "&include_adult=false";

const upcoming = "/movie/upcoming?";
const nowPlaying = "/movie/now_playing?";
const popular = "/movie/popular?";
const topRated = "/movie/top_rated?";
const trendingToday= "/trending/movie/day?";
const genre= "/genre/movie/list?"

function App() {
  const [upcomingMovies, setUpcomingMovies] = React.useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = React.useState([]);
  const [popularMovies, setPopularMovies] = React.useState([]);
  const [topRatedMovies, setTopRatedMovies] = React.useState([]);
  const [trendingMovies, setTrendingMovies] = React.useState([]);
  const [genreData, setGenreData] = React.useState([]);
 
  React.useEffect(() => {

    const fetchPopular = async () => {
      const res = await fetch(`${baseUrl}${popular}${apiKey}${blockContent}${language}`)
      const data = await res.json()
      setPopularMovies(data.results)
    }
    const fetchTrending = async () => {
      const res = await fetch(`${baseUrl}${trendingToday}${apiKey}${blockContent}${language}`)
      const data = await res.json()
      setTrendingMovies(data.results)
    }
    const fetchUpcoming = async () => {
      const res = await fetch(`${baseUrl}${upcoming}${apiKey}${blockContent}${language}`)
      const data = await res.json()
      setUpcomingMovies(data.results)
    }
    const fetchTopRated = async () => {
      const res = await fetch(`${baseUrl}${topRated}${apiKey}${blockContent}${language}`)
      const data = await res.json()
      setTopRatedMovies(data.results)
    }
    const getAllGenre = async () => {
      const res = await fetch(`${baseUrl}${genre}${apiKey}`)
      const data = await res.json()
      setGenreData(data.genres)
      
      console.log(data.genres)
    }

    const fetchGenre = async () => {
      const res = await fetch(`${baseUrl}/discover/movie?${apiKey}&sort_by=popularity.desc&with_genres=878${blockContent}${language}`)
      const data = await res.json()
      setGenreData(data.results)
    }

  getAllGenre();
  fetchPopular()
  fetchTrending()
  fetchUpcoming()
  fetchTopRated()
  fetchGenre()
}, [])

  return (
    <div className="App">
      <div class="container">
        <Header/>
        <Navbar/>
        <div class="MoviesEvents">
  
          <Row  title={"Trending Today"}  type={trendingMovies}/>
          <Row  title={"Upcoming Movies"}  type={upcomingMovies}/>
          <Row  title={"Popular Movies"}  type={popularMovies}/>
          <Row  title={"Top Rated Movies"}  type={topRatedMovies}/>
          <Row  title={"Sci-Fi"}  type={genreData}/>
          
        </div>
      </div>
    </div>
  );
}

export default App;
