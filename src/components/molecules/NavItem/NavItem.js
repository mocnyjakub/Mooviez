import React from "react";
import { Wrapper, StyledLink, Icon } from "./StyledNavItem";

const NavItem = ({ description, linkTo, icon, exact }) => {
  return (
    <Wrapper>
      <Icon>
        <img src={icon} alt="" />
      </Icon>
      <StyledLink exact to={linkTo}>
        {description}
      </StyledLink>
    </Wrapper>
  );
};

export default NavItem;
