import Stack from "../../Atoms/Stack";
import { MyInfoStackContainer, ProfileContentDiv } from "./styles";

const MyInfo = () => {
  return (
    <>
      <ProfileContentDiv>
        <span>아이디:</span>
        <span className="data">여인수</span>
      </ProfileContentDiv>
      <ProfileContentDiv>
        <span>소셜 아이디:</span>
        <span className="data"> insu12@ajou.ac.kr</span>
      </ProfileContentDiv>
      <ProfileContentDiv>
        <span>백준 랭크:</span>
        <span className="data">Bronze</span>
      </ProfileContentDiv>
      <ProfileContentDiv>
        <span>사용 기술 스택:</span>
        <MyInfoStackContainer>
          <Stack size="18px" type="HTML"></Stack>
          <Stack size="18px" type="CSS"></Stack>
          <Stack size="18px" type="JavaScript"></Stack>
        </MyInfoStackContainer>
      </ProfileContentDiv>
    </>
  );
};

export default MyInfo;
