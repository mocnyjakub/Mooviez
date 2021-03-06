import React from "react";
import styled from "styled-components";
import Menu from "./Menu/Menu";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  grid-column: 1/2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow.navBar};
  overflow-x: hidden;

  @media (max-width: 500px) {
    min-height: 20px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3;
    background-color: white;
  }

  &:after {
    content: "";
    display: block;
    height: 100%;
    width: 1px;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.lightMenu};
    opacity: 0.1;
    right: 0;
    top: 0;
  }
`;

const Nav = () => {
  return (
    <Wrapper>
      <Menu title="Menu" />
    </Wrapper>
  );
};

export default Nav;
