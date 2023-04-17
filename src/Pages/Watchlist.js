import React from "react"
import Row from "../components/Row";

function Watchlist(props) {
  return (
      <div className="watchlist-container">
      <div class="MoviesEvents">
        <Row  title={"Watchlist"}  type={props.watchlist}/>
        {props.watchlist.length === 0 && <p>Add movies to the watchlist.</p>}
      </div>
    </div>
  );
}
export default Watchlist;
