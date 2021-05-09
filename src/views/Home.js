import React from "react";
import Row from "../components/organisms/Row/Row";
import requests from "../requests/index";

const Home = () => {
  return (
    <>
      <Row fetchUrl={requests.fetchTopRated} headerStyle />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Trending" fetchUrl={requests.fetchPopular} />
    </>
  );
};

export default Home;
