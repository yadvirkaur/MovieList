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
  const [watchlist, setWatchlist] = React.useState(JSON.parse(localStorage.getItem("watchlist")) || []);

  React.useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  function toggleWatchlist(movie) {
    if (watchlist.find(item => item.id === movie.id)) {
      setWatchlist((prevWatchlist) =>
      prevWatchlist.filter(item => item.id !== movie.id));
    } else {
      setWatchlist((prevWatchlist) => [movie, ...prevWatchlist]);
    }
  }

  return (
    <div>
     <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<MovieDetails onToggleWatchlist={toggleWatchlist} watchlist={watchlist} />} />
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
