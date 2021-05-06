import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import MainTemplate from "../components/templates/MainTemplate";
import Home from "../views/Home";
import { paths } from "../paths";

const HomeWrapper = styled.div`
  grid-column: 2/3;
  min-height: 100vh;
  display: grid;
  align-items: center;
  justify-content: center;
`;

const Router = () => {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <HomeWrapper>
            <Route path={paths.home} exact component={Home} />
            <Route path={paths.community}>
              <h1>Community</h1>
            </Route>
            <Route path={paths.discover}>
              <h1>Discover</h1>
            </Route>
          </HomeWrapper>
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  );
};

export default Router;
