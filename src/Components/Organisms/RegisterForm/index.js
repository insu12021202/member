import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { user } from "../../../Common/Style/testData/testdata";
import { Button } from "../../Atoms/Button";
import RegisterInput from "../../Molecules/Account/RegisterInput";
import RegisterFormWrapper from "./styles";

const RegisterForm = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickName, setNickname] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    user.id = email;
    user.password = password;
    user.nickname = nickName;
    window.alert("회원가입 완료, 로그인 해주세요");
    navigate("/login");
  };
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "nickname") {
      setNickname(value);
    }
  };
  return (
    <>
      <RegisterFormWrapper onSubmit={onSubmit}>
        <RegisterInput
          name="email"
          type="text"
          id="registerIdInput"
          placeholder="이메일"
          width="300px"
          text="이메일"
          value={email}
          onChange={onChange}
        />
        <RegisterInput
          name="password"
          type="password"
          id="registerPwInput"
          placeholder="비밀번호"
          width="300px"
          text="비밀번호"
          value={password}
          onChange={onChange}
        />
        <RegisterInput
          type="text"
          name="nickname"
          id="registerNicknameInput"
          placeholder="닉네임"
          width="300px"
          text="닉네임"
          onChange={onChange}
        />
        <Button type="submit" text="회원가입" />
      </RegisterFormWrapper>
    </>
  );
};

export default RegisterForm;
