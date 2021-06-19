import React, { useEffect, useState } from "react";

const Movie = () => {
  const [movie, setMovie] = useState({});
  const [movieName, setMovieName] = useState("");
  useEffect(() => {
    fetch("https://www.omdbapi.com/?t=The+Dark+Knight&apikey=d0291610")
      .then((resp) => resp.json())
      .then((movieApi) => {
        console.log(movieApi);
        setMovie(movieApi);
      });
  }, []);

  const getMovie = () => {
    fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=d0291610`)
      .then((resp) => resp.json())
      .then((movieApi) => {
        console.log(movieApi);
        setMovie(movieApi);
      });
  };

  return (
    <div className="container p-5">
      <div className="input-group mb-3 col-md-4 offset-md-1">
        <input
          type="text"
          className="form-control"
          placeholder="Movie Name"
          onChange={(e) => setMovieName(e.target.value)}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={getMovie}
        >
          SEARCH
        </button>
      </div>
      <div className="row">
        <div className="card col-md-4 offset-md-4 ">
          <img src={movie.Poster} className="card-img-top mt-3" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{movie.Title}</h5>
            <p className="card-text">{movie.Genre}</p>
            <p className="card-text">{movie.Actors}</p>
            <p className="card-text">{movie.Director}</p>
            <a href="#" className="btn btn-primary">
              Go
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
