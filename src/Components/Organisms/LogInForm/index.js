import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { user } from "../../../Common/Style/testData/testdata";
import { Button } from "../../Atoms/Button";
import Span from "../../Atoms/Span";
import RegisterInput from "../../Molecules/Account/RegisterInput";
import RegisterFormWrapper from "../RegisterForm/styles";

const LogInForm = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    if (user.id === email) {
      if (user.password === password) {
        user.isLoggedIn = true;
        navigate("/");
      }
      setError("비밀번호가 일치하지 않습니다.");
    } else {
      setError("아이디가 일치하지 않습니다.");
    }
  };
  const onChange = (event) => {
    console.log(user);
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  return (
    <>
      <RegisterFormWrapper onSubmit={onSubmit}>
        <RegisterInput
          name="email"
          value={email}
          onChange={onChange}
          type="text"
          id="registerIdInput"
          placeholder="아이디"
          width="300px"
          text="아이디"
        />
        {error ? <Span text={error} fontSize="20px" /> : null}
        <RegisterInput
          name="password"
          value={password}
          onChange={onChange}
          type="password"
          id="registerPwInput"
          placeholder="비밀번호"
          width="300px"
          text="비밀번호"
        />
        <Button type="submit" text="로그인" />
      </RegisterFormWrapper>
    </>
  );
};

export default LogInForm;
