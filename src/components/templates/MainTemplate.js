import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/GlobalStyles";
import { mainTheme } from "../../styles/theme";
import Nav from "../organisms/Nav";

const Layout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 200px 1fr;
  overflow-x: hidden;
  /* overflow-y: scroll; */
`;

const MainTemplate = ({ children }) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Layout>
        <Nav />
        {children}
      </Layout>
    </ThemeProvider>
  );
};

export default MainTemplate;
