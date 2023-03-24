//import logo from './logo.svg';
import React from "react"
import MovieCard from "./components/MovieCard";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
//import {nanoid} from "nanoid"


function App() {

  const [moviesDB, setMoviesDB] = React.useState([])
 
  React.useEffect(() => {

    async function getMoviesDB() {
        const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=8d689d587d0f1c9bf7c89cc8968a7d18&language=en-US&page=1')
        const data = await res.json()

        const q= []
        data.results.forEach((i)=> {
          q.push({
            id: i.id,
            name: i.name,
            poster: i.poster_path
          })
        })
        setMoviesDB(q)
        console.log(data.results[1].name)
    }
    getMoviesDB()
}, [])

const movieList = moviesDB.map(movie => (
  <MovieCard
      id={movie.id} 
      key={movie.id}
      m={movie} 
  />
))


  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}

      <div class="container">
        <Header/>
        <Navbar/>
        <div class="MoviesEvents">
          <div class="MoviesEvents_headings">Your recent movies</div>
          <div className="movie">
            {movieList}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
