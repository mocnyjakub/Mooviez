import styled from "styled-components";

const imgUrl = "https://image.tmdb.org/t/p/original";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const TitleWrapper = styled.div`
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    color: #000;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    outline: none;
    border: 1px solid #ddd;
    cursor: pointer;
    background: transparent;
    &:nth-of-type(1) {
      margin-right: 5px;
    }
  }
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 50px;
  align-items: flex-start;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  .row__contain {
    display: flex;
    padding: 10px 0;
  }
`;

export const RowHeading = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImageWrapper = styled.div`
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
    cursor: pointer;
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
