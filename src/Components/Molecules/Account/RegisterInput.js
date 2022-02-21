import Input from "../../Atoms/Input";
import Label from "../../Atoms/Label";
import { InputContainer } from "./styles";

const RegisterInput = ({
  type,
  text,
  placeholder,
  id,
  width,
  name,
  value,
  onChange,
}) => {
  return (
    <>
      <InputContainer>
        <Label htmlFor={id} text={text} />
        <Input
          name={name}
          value={value}
          onChange={onChange}
          id={id}
          type={type}
          width={width}
          placeholder={placeholder}
        ></Input>
      </InputContainer>
    </>
  );
};

export default RegisterInput;
