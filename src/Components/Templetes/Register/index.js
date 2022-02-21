import Span from "../../Atoms/Span";
import Header from "../../Organisms/Header";
import RegisterForm from "../../Organisms/RegisterForm";
import { ContentWrapper, Container } from "./styles";

const RegisterPageTemplete = () => {
  return (
    <>
      <Container>
        <Header></Header>
        <ContentWrapper>
          <Span text="회원가입" fontSize="45px" />
          <RegisterForm></RegisterForm>
        </ContentWrapper>
      </Container>
    </>
  );
};

export default RegisterPageTemplete;
