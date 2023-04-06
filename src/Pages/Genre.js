import React from "react"
import { useParams } from 'react-router-dom';
import Row from "../components/Row";

const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "api_key=8d689d587d0f1c9bf7c89cc8968a7d18";
const language = "&language=en-US";  
const popularity= "&sort_by=popularity.desc";

//Genre:  https://api.themoviedb.org/3/discover/movie?api_key=8d689d587d0f1c9bf7c89cc8968a7d18&sort_by=popularity.desc&with_genres=16&page=1

function Genre() {
    const params = useParams();
    const query = params.id;
    const name = params.name;
    const [searchResults, setSearchResults] = React.useState([]);

    React.useEffect(() => {
        if (query) {
          const url= `${baseUrl}/discover/movie?with_genres=${query}&${apiKey}${language}${popularity}`;
          fetch(url)
            .then((res) => res.json())
            .then((data) => {
              setSearchResults(data.results);
            })
            .catch((error) => console.error(error));
        }
      }, [query]);

  return (
    <div>
       <div class="MoviesEvents">
          <Row  title={"Movie Results"}  type={searchResults}/>
        </div>
    </div>
  );
}
export default Genre;
