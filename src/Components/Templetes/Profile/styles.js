import styled from "styled-components";
import Span from "../../Atoms/Span";

const ProfileContentWrapper = styled.div`
  width: 1300px;
  height: 700px;
  margin-bottom: 20px;
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
  height: 92%;
`;

const MyPageSpan = styled.span`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 30px;
  margin: 30px;
`;

const MyPageNavItem = styled.span`
  font-size: 20px;
  margin-right: 100px;
  cursor: pointer;
  color: ${(props) => (props.active === true ? "#707070" : "#dfdfdf")};
  &:hover {
    color: #707070;
  }
`;

export { ProfileContentWrapper, ProfileContainer, MyPageSpan, MyPageNavItem };
