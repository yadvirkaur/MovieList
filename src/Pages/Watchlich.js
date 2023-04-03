// import React from "react"

// function Watchlist() {
//   return (
//     <div>
//        <h1>Watchlist page goes here</h1>
//     </div>
//   );
// }

// export default Watchlist;


//Example trending movies: https://api.themoviedb.org/3/trending/movie/day?api_key=<<api_key>> 
//Popular movies: https://api.themoviedb.org/3/movie/popular?api_key=8d689d587d0f1c9bf7c89cc8968a7d18&include_adult=false&language=en-US&page=1  

//To discover anything: 
//https://developers.themoviedb.org/3/discover/movie-discover
//Also note that a number of filters support being comma (,) or pipe (|) separated. Comma's are treated like an AND and query while pipe's are an OR.
//https://api.themoviedb.org/3/discover/movie?api_key=8d689d587d0f1c9bf7c89cc8968a7d18&language=en-US&sort_by=popularity.desc&with_genres=27&include_adult=false&include_video=false&page=1

//To get list of genres:  Genre= https://api.themoviedb.org/3/genre/movie/list? 
//Or: https://api.themoviedb.org/3/genre/movie/list?api_key=8d689d587d0f1c9bf7c89cc8968a7d18&language=en-US 



const apiKey = "api_key=8d689d587d0f1c9bf7c89cc8968a7d18";
const baseUrl = "https://api.themoviedb.org/3";
const language = "&language=en-US&page=1";  
const blockContent= "&include_adult=false";
const genre= "/genre/movie/list?"

function Home() {
    const [genreData, setGenreData] = React.useState([]);
 
  React.useEffect(() => {
    const getAllGenre = async () => {
      const res = await fetch(`${baseUrl}${genre}${apiKey}`)
      const data = await res.json()
      setGenreData(data.genres)
      console.log(data.genres)
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
      {/* <div class="container"> */}
        {/* <Header/>
        <Navbar/> */}
        <div class="MoviesEvents">
          <Row  title={"Trending Today"}  type={trendingMovies}/>
          <Row  title={"Upcoming Movies"}  type={upcomingMovies}/>
          <Row  title={"Popular Movies"}  type={popularMovies}/>
          <Row  title={"Top Rated Movies"}  type={topRatedMovies}/>
          <Row  title={"Sci-Fi"}  type={genreData}/>
        </div>
      {/* </div> */}
    </div>
  );
}

export default Home;
