import axios from "../../../axios/index";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import {
  RowWrapper,
  ImageWrapper,
  RowHeading,
  TitleWrapper,
  Wrapper,
} from "./StyledRow";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const ref = useRef(null);
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios
        .get(fetchUrl)
        .catch((error) => console.log(error));
      setMovies(request.data.results);
    };
    fetchData();
  }, [fetchUrl]);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  return (
    <>
      <TitleWrapper>
        <h2 className="row__h2">{title}</h2>
        <div className="row__buttons">
          <button onClick={() => scroll(-200)}>{"<"}</button>
          <button onClick={() => scroll(200)}>{">"}</button>
        </div>
      </TitleWrapper>
      <RowWrapper ref={ref}>
        <RowHeading className="row__heading" />
        <div className="row__contain">
          {movies.map(({ poster_path, id }) => (
            <ImageWrapper key={id} poster_path={poster_path} />
          ))}
        </div>
      </RowWrapper>
    </>
  );
};

export default Row;
