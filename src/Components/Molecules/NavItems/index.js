import { useLocation } from "react-router-dom";
import { user } from "../../../Common/testData/testdata";
import StyledLink from "../../Atoms/Link/styles";
import { NavItemsWrapper } from "./styles";

const NavItems = () => {
  const { pathName } = useLocation();

  return (
    <>
      <NavItemsWrapper>
        <StyledLink
          to="/"
          text={"Home"}
          isActive={pathName === "/"}
        ></StyledLink>
        {user.isLoggedIn ? (
          <>
            <StyledLink
              to="/playlist"
              text={"PlayList"}
              isActive={pathName === "/playlist"}
            ></StyledLink>
            <StyledLink
              to="/profile"
              text={user.nickname}
              isActive={pathName === "/profile"}
            ></StyledLink>
          </>
        ) : (
          <>
            <StyledLink
              to="/register"
              text={"Register"}
              isActive={pathName === "/register"}
            ></StyledLink>
            <StyledLink
              to="/login"
              text={"Log In"}
              isActive={pathName === "/login"}
            ></StyledLink>{" "}
          </>
        )}
      </NavItemsWrapper>
    </>
  );
};

export default NavItems;
