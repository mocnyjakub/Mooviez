import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Children } from "react";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 25px;
  @media (max-width: 500px) {
    padding: 0;
    justify-content: center;
  }
`;
const activeClassName = "active-link";

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  text-decoration: none;
  font-weight: 500;
  display: flex;

  color: ${({ theme }) => theme.colors.navBarLinkText};
  font-weight: 500;
  text-shadow: -15px 5px 20px ${({ theme }) => theme.colors.navBarLinkText};
  position: relative;
  width: 100%;

  &.${activeClassName} {
    &::after {
      opacity: 1;
    }
  }
  &::after {
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    content: "";
    position: absolute;
    width: 23px;
    height: 4px;
    top: 50%;
    right: -35px;
    transform: translateY(-50%) rotate(90deg);
    background-color: ${({ theme }) => theme.colors.black};
    @media (max-width: 500px) {
      display: none;
    }
  }

  @media (max-width: 500px) {
    align-items: center;
    justify-content: center;
  }
`;

export const Icon = styled.div`
  height: 100%;
  padding-right: 10px;
  display: flex;
  place-items: center;
  @media (max-width: 500px) {
    padding: 10px 5px;
  }
  img {
    height: 24px;
    object-fit: contain;
  }
`;

export const TextWrapper = styled.div`
  @media (max-width: 500px) {
    display: none;
  }
`;
