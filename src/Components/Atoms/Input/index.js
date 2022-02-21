import Container from "./styles";

const Input = ({ id, width, type, placeholder, name, value, onChange }) => {
  return (
    <Container
      name={name}
      value={value}
      onChange={onChange}
      id={id}
      type={type}
      width={width}
      placeholder={placeholder}
    />
  );
};

export default Input;
