import Span from "../../Atoms/Span";
import Header from "../../Organisms/Header";
import LogInForm from "../../Organisms/LogInForm";
import { Container, ContentWrapper } from "../Register/styles";

const LoginPageTemplete = () => {
  return (
    <>
      <Container>
        <Header></Header>
        <ContentWrapper>
          <Span text="로그인" fontSize="45px" />
          <LogInForm></LogInForm>
        </ContentWrapper>
      </Container>
    </>
  );
};

export default LoginPageTemplete;
