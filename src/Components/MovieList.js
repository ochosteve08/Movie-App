import React from "react";


const MovieList = ({movies,Favorite,handleAddFavorite} ) => {

 

  
  return (
    <>
      {movies ? (
        <>
          {movies
            .filter((movies) => movies.Poster !== "N/A")
            .map((movies, index) => (
              <div
                className="image-container d-flex justify-content-start m-3"
                key={index}
              >
                <img className="poster" src={movies.Poster} alt="movies" />
                <div onClick={()=>{handleAddFavorite(movies)}} className="overlay d-flex justify-content-center align-items-center">
                  <Favorite />
                </div>
              </div>
            ))}
        </>
      ) : (
        <div className="col text-center">No movies to display</div>
      )}
    </>
  );
};

export default MovieList;
