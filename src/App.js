import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import Layout from "./components/Layout";
import Friends from "./Pages/Friends";
import Watchlist from "./Pages/Watchlist";
import Genre from "./Pages/Genre";
import Search from "./Pages/Search";
import NotFound from "./Pages/NotFound";

function App() {
  const [watchlist, setWatchlist] = React.useState([]);

  function addToWatchlist(movie) {  
    // Check if movie is already in watchlist
    if (!watchlist.find(item => item.id === movie.id)) {
      console.log(`Adding movie ${movie.title} to watchlist...`);
      setWatchlist((prevWatchlist) => [...prevWatchlist, movie]);
  }}
  
  return (
    <div>
     <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<MovieDetails onAddToWatchlist={addToWatchlist} />} />
          <Route path="/Friends" element={<Friends />} />
          <Route path="/Watchlist" element={<Watchlist  watchlist={watchlist}/>} />
          <Route path="/Search/:query" element={<Search />} />
          <Route path="/Genre/:id" element={<Genre />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
