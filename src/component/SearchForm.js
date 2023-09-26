import React, { useRef, useState } from "react";
import { CustomCard } from "./CustomCard";
import { fetchMovie } from "../utils/axiosHelper";

export const SearchForm = (addToMovieList) => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState("");
  const strRef = useRef("");

  const handleOnsubmit = async (e) => {
    e.preventDefault();
    setMovie({});
    setError("");

    const str = strRef.current.value;

    const data = await fetchMovie(str);

    if (data.response === "True") {
      setMovie(data);
    } else {
      setError(data.Error);
    }
  };
  console.log(movie);
  return (
    <div className="bg-black p-5 rounded shadow-lg">
      <div className="row gap-2">
        <div className="col-md">
          <form onSubmit={handleOnsubmit}>
            <div className="mb-3">
              <input
                ref={strRef}
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="Seacrch movie name ..."
              />
            </div>

            <div className="d-grid">
              <button type="submit" class="btn btn-primary">
                Search
              </button>
            </div>
          </form>
          <div className="col-md d-flex justify-content-center">
            {error && <div className="alert alert-danger">{error}</div>}

            {movie?.imdnID && <CustomCard movie={movie} />}
          </div>
        </div>
      </div>
    </div>
  );
};
