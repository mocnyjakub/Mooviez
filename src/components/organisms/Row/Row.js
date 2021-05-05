import axios from "../../../axios/index";
import React, { useState, useEffect } from "react";
import "./Row.scss";
import styled from "styled-components";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios
        .get(fetchUrl)
        .catch((error) => console.log(error));
      setMovies(request.data.results);
    };
    fetchData();
  }, [fetchUrl]);

  const imgUrl = "https://image.tmdb.org/t/p/original";

  const ImageWrapper = styled.div`
    width: 180px;
    height: 250px;
    margin-right: 1rem;
    background-image: url(${({ poster_path }) => `${imgUrl}${poster_path}`});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: transform 450ms;
    position: relative;
    &:hover {
      transform: scale(1.08);
    }
    /* &::before {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.25);
    } */
    &::before {
      content: "Watch Now";
      display: block;
      height: 15%;
      background-color: red;
      position: absolute;
      right: 10%;
      left: 10%;
      bottom: 6%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #e71d60;
      color: #ddd;
      font-size: 12px;
      /* font-weight: 700; */
    }

    &::after {
      content: "+";
      display: block;
      width: 35px;
      height: 35px;
      position: absolute;
      top: 5%;
      right: 5%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ddd;
      font-size: 1.5rem;
      cursor: pointer;
      /* background-color: rgba(0, 0, 0, 0.25); */
      backdrop-filter: blur(5px);
      background-color: rgba(60, 60, 60, 0.6);
    }
  `;
  return (
    <>
      <div className="row">
        <h2 className="row__h2">{title}</h2>
        <div className="row__contain">
          {movies.map(({ poster_path, id }) => (
            <ImageWrapper key={id} poster_path={poster_path} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Row;
