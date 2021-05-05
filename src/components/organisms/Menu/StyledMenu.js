import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 50px 0 30px;
  p {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.lightMenu};
    font-weight: 700;
    font-size: 1.25rem;
    letter-spacing: 0.1rem;
    padding-left: 25px;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 10px;
`;
