import Container from "./styles";

const Label = ({ text, htmlFor }) => {
  return <Container htmlFor={htmlFor}>{text}</Container>;
};

export default Label;
