import React from "react";
import NavItem from "../../molecules/NavItem/NavItem";
import homeIcon from "../../../assets/icons/home.png";
import CommunityIcon from "../../../assets/icons/community.png";
import DiscoverIcon from "../../../assets/icons/search.png";
import RecentIcon from "../../../assets/icons/recent.png";
import TopRatedIcon from "../../../assets/icons/star.png";
import MovieIcon from "../../../assets/icons/movie.png";
import { Wrapper, StyledNav } from "./StyledMenu";
import { paths } from "../../../paths/index";
import moduleName, {
  navigationListItemTypes,
} from "../../../helpers/NavItemTypes";

const Menu = ({ title }) => {
  return (
    <Wrapper>
      <p>{title}</p>
      <StyledNav>
        <NavItem
          description={navigationListItemTypes.home}
          linkTo={paths.home}
          icon={homeIcon}
          exact="exact"
        />
        <NavItem
          description={navigationListItemTypes.community}
          linkTo={paths.community}
          icon={CommunityIcon}
        />
        <NavItem
          description={navigationListItemTypes.discover}
          linkTo={paths.discover}
          icon={DiscoverIcon}
        />
        <NavItem description="Recent" linkTo={paths.recent} icon={RecentIcon} />
        <NavItem
          description={navigationListItemTypes.topRated}
          linkTo={paths.topRated}
          icon={TopRatedIcon}
        />
        <NavItem
          description={navigationListItemTypes.movie}
          linkTo={paths.movie}
          icon={MovieIcon}
        />
      </StyledNav>
    </Wrapper>
  );
};

export default Menu;
