import styled from "styled-components";
import Span from "../../Atoms/Span";

const ProfileContentWrapper = styled.div`
  width: 1400px;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 23px;
  box-shadow: 0px 0px 13px #00000029;
  padding: 20px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  width: 100%;
  height: 980px;
`;

const MyPageSpan = styled.span`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 30px;
  margin: 30px;
`;

export { ProfileContentWrapper, ProfileContainer, MyPageSpan };
