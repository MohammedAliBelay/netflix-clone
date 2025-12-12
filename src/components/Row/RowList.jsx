import React from "react";
import Row from "./Row";
import Requests from "../../utils/request/Request";

function RowList() {
  return (
    <>
      <Row title="Netflix Orginal" fetchUrl={Requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={Requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={Requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={Requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={Requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={Requests.fetchRomanceMovies} />
      <Row title= "Adventure Movies" fetchUrl={Requests.fetchAdventureMovies} />
      <Row title= "Crime Movies" fetchUrl={Requests.fetchCrimeMovies} />
      <Row title="Fantasy Movies" fetchUrl={Requests.fetchFantasyMovies} />
    </>
  );
}

export default RowList;
