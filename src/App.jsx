import "./App.css";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

function App() {
  //https://www.omdbapi.com/?s=Batman&apikey=18967765

  const API_URL = "https://www.omdbapi.com/?s=";
  const API_KEY = "&apikey=18967765";

  const [movies, setMovies] = useState([]);
  const [inpSearch, setInpSearch] = useState('')
  console.log(inpSearch)
  const getMovies = async (search) => {
    const res = await fetch(`${API_URL}${search}${API_KEY}`);
    const data = await res.json();
    console.log(data.Search);
    setMovies(data.Search);
  };

  useEffect(() => {
    getMovies('Dora');
  }, []);

  const movie = {
    Title: "Batman Begins",
    Year: "2005",
    imdbID: "tt0372784",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  };

  return (
    <div className="App">
      <div className="search">
        <input type="search" name="" id="" onChange={(e)=>{setInpSearch(e.target.value)}}/>
        <button onClick={()=>{getMovies(inpSearch)}}>Search</button>
      </div>

      <div className="movie">
        {movies.map((movie) => {
          return <MovieCard movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default App;
