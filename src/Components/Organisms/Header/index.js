import Span from "../../Atoms/Span";
import NavItems from "../../Molecules/NavItems";
import HeaderWrapper from "./styles";

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <Span fontSize={"20px"} text={"LOGO"}></Span>
        <NavItems></NavItems>
      </HeaderWrapper>
    </>
  );
};

export default Header;
