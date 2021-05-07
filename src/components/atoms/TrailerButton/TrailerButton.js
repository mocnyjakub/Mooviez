import React from "react";
import { Button } from "./StyledTrailerButton";

const TrailerButton = ({ text, showTrailer, title }) => {
  console.log(showTrailer);
  return <Button onClick={() => showTrailer(title)}>{text}</Button>;
};

export default TrailerButton;
