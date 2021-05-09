import styled from "styled-components";

const imgUrl = "https://image.tmdb.org/t/p/original";

export const TitleWrapper = styled.div`
  height: auto;
  margin-bottom: 20px;
  margin-top: 40px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: relative;
  h2 {
    font-size: 1.5rem;
  }
  .row__buttons {
    position: absolute;
    top: 0;
    right: 0;
  }
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
  width: 100%;
  flex-direction: column;
  margin-bottom: 40px;
  align-items: flex-start;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  .row__contain {
    display: flex;
    width: ${({ headerStyle }) => (headerStyle ? "100%" : "auto")};
    padding: ${({ headerStyle }) => (headerStyle ? "0" : "10px 0")};
  }
`;

export const ImageWrapper = styled.div`
  width: ${({ headerStyle }) => (headerStyle ? "100%" : "180px")};
  height: ${({ headerStyle }) => (headerStyle ? "400px" : "250px")};
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
  align-items: center;
  margin-right: ${({ headerStyle }) => (headerStyle ? "0" : "1rem")};
  background-image: url(${({ poster_path }) => `${imgUrl}${poster_path}`});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: transform 450ms;
  position: relative;
  &:hover {
    ${({ headerStyle }) => (headerStyle ? null : "transform:scale(1.08);")};
  }
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
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
    backdrop-filter: blur(5px);
    background-color: rgba(60, 60, 60, 0.6);
  }
`;
export const CloseButton = styled.button`
  width: 40px;
  height: 40px;
  align-self: flex-end;
  margin-bottom: 30px;
  outline: none;
  border: none;
  cursor: pointer;
`;
