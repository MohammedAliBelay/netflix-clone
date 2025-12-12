import { useEffect, useState } from "react";
import axios from "../../utils/axios/Axios.jsx";
import requests from "../../utils/request/Request.jsx";
import "./banner.css";

function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTopRated);
      const results = request.data.results;
      setMovie(results[Math.floor(Math.random() * results.length)]);
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center",
      }}
    >
      <div className="content">
        <h1>{movie?.title || movie?.name}</h1>
        <p>{movie?.overview}</p>
      </div>
    </header>
  );
}
export default Banner;
