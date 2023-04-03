import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Row from "./components/Row";
import MovieDetails from "./components/MovieDetails";
import Layout from "./components/Layout";
import Friends from "./Pages/Friends";
import Watchlist from "./Pages/Watchlist";

function App() {
  return (
    <div>
     <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<MovieDetails />} />
          <Route path="/Friends" element={<Friends />} />
          <Route path="/Watchlist" element={<Watchlist />} />
       
        </Route>
      </Routes>
    </div>
  );
}

export default App;