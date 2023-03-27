import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./Components/MovieList";
import SearchBox from "./Components/SearchBox";
import MovieListHeading from "./Components/MovieListHeading";
import AddFavorite from "./Components/AddFavorite";
import RemoveFavorite from "./Components/RemoveFavorite";

function App() {
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState("");
  const [favorite, setFavorite] = useState([]);

  const API_URL = "http://www.omdbapi.com/";
  const API_KEY = "c3e66fb";

  useEffect(() => {
    const FetchMovie = async () => {
      const URL = `${API_URL}?s=${search}&apikey=${API_KEY}`;

      try {
        const response = await fetch(URL);
        const data = await response.json();

        setMovie(data.Search);
      } catch (err) {
        console.log(err.message);
      }
    };

    FetchMovie();
  }, [search]);

  useEffect(() => {
    const movieFavorite = JSON.parse(
      localStorage.getItem("react-movie-app-favorite")
    );

    if (movieFavorite) {
      setFavorite(movieFavorite);
    }
  }, []);

  const addToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favorite", JSON.stringify(items));
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
   
  };

  const AddFavoriteMovie = (movies) => {
    const newFavoriteList = [...favorite, movies];
    setFavorite(newFavoriteList);
    addToLocalStorage(newFavoriteList);
  };

  const RemoveFavoriteMovie = (movies) => {
    const newFavoriteList = favorite.filter(
      (favorite) => favorite.imdbID !== movies.imdbID
    );
    setFavorite(newFavoriteList);
    addToLocalStorage(newFavoriteList);
  };

  return (
    <div className="container-fluid movie-app">
      <div className="header  m-4 ">
        <MovieListHeading title={"Movies"} />
        <SearchBox search={search} handleChange={handleChange} />
      </div>
      <div className="app d-flex flex-row">
        <MovieList
          movies={movie}
          Favorite={AddFavorite}
          handleAddFavorite={AddFavoriteMovie}
        />
      </div>
      <div className="fav d-flex flex-row align-items-center justify-content-start m-4">
        <MovieListHeading title={"Favorites"} />
      </div>
      <div className="app d-flex flex-row">
        <MovieList
          movies={favorite}
          Favorite={RemoveFavorite}
          handleAddFavorite={RemoveFavoriteMovie}
        />
      </div>
    </div>
  );
}

export default App;
