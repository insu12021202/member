import { BtnContainer } from "./styles";

const Button = ({ type, text, onClick }) => {
  return (
    <BtnContainer onClick={onClick} type={type}>
      {text}
    </BtnContainer>
  );
};

export { Button };
