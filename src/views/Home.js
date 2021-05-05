import React from "react";
import Row from "../components/organisms/Row/Row";
import requests from "../requests/index";

const Home = () => {
  return (
    <>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Trending" fetchUrl={requests.fetchPopular} />
    </>
  );
};

export default Home;
