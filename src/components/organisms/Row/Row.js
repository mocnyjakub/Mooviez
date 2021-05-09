import axios from "../../../axios/index";
import React, { useState, useEffect, useRef } from "react";
import {
  RowWrapper,
  ImageWrapper,
  TitleWrapper,
  CloseButton,
} from "./StyledRow";
import TrailerButton from "../../atoms/TrailerButton/TrailerButton";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Row = ({ title, fetchUrl, headerStyle }) => {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerUrl] = useState("");
  const ref = useRef(null);
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios
        .get(fetchUrl)
        .catch((error) => console.log(error));
      const MoviesFetchArray = request.data.results;
      console.log(MoviesFetchArray);
      headerStyle
        ? setMovies([
            MoviesFetchArray[
              Math.floor(Math.random() * MoviesFetchArray.length)
            ],
          ])
        : setMovies(MoviesFetchArray);
    };
    fetchData();
  }, [fetchUrl]);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const showTrailer = (title) => {
    if (trailerURL) {
      setTrailerUrl("");
    } else {
      movieTrailer(title || "")
        .then((url) => {
          console.log(url);
          console.log(new URL(url));
          console.log(new URL(url).search);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          const youtubeLinkId = urlParams.get("v");
          console.log(youtubeLinkId);
          setTrailerUrl(youtubeLinkId);
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <>
      {headerStyle ? null : (
        <TitleWrapper>
          <h2>{title}</h2>
          <div className="row__buttons">
            <button onClick={() => scroll(-200)}>{"<"}</button>
            <button onClick={() => scroll(200)}>{">"}</button>
          </div>
        </TitleWrapper>
      )}

      <RowWrapper ref={ref} headerStyle={headerStyle}>
        <div className="row__contain">
          {movies.map(({ poster_path, id, title }) => (
            <ImageWrapper
              key={id}
              poster_path={poster_path}
              headerStyle={headerStyle}
            >
              <TrailerButton
                text="Watch Now"
                showTrailer={showTrailer}
                title={title}
              />
            </ImageWrapper>
          ))}
        </div>
      </RowWrapper>
      {trailerURL && (
        <CloseButton onClick={() => setTrailerUrl("")}>X</CloseButton>
      )}
      {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
    </>
  );
};

export default Row;
