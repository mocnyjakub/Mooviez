import React, { useState } from "react";
import { Wrapper, StyledLink, Icon, TextWrapper } from "./StyledNavItem";

const NavItem = ({ description, linkTo, icon, exact }) => {
  return (
    <Wrapper>
      <StyledLink exact to={linkTo}>
        <Icon>
          <img src={icon} alt="" />
        </Icon>
        <TextWrapper>{description}</TextWrapper>
      </StyledLink>
    </Wrapper>
  );
};

export default NavItem;
