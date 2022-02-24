import { user } from "../../../Common/testData/testdata";
import Span from "../../Atoms/Span";
import Header from "../../Organisms/Header";
import { Container, ContentWrapper } from "./styles";

const MainPageTemplete = () => {
  return (
    <>
      <Container>
        <Header></Header>
        <ContentWrapper>
          {user.isLoggedIn ? (
            <Span fontSize={"50px"} text={"Hello Front-Controller!"}></Span>
          ) : (
            <Span fontSize={"50px"} text={"Please Register And Log In!"}></Span>
          )}
        </ContentWrapper>
      </Container>
    </>
  );
};

export default MainPageTemplete;
