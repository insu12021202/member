import styled from "styled-components";

const RightContentContainer = styled.div`
  width: 70%;
  height: 100%;
  padding: 20px;
`;

const ProfileTitleContent = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const ProfileName = styled.span`
  font-size: 50px;
  font-weight: 600;
  color: #707070;
`;

const ProfileSocialId = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #a3a3a3;
  margin-left: 5px;
`;

const StackContainer = styled.div`
  width: 70%;
  margin-top: 10px;
`;

const ProfileContentContainer = styled.div`
  width: 100%;
  height: 77%;
  margin-top: 3%;
`;

const ProfileContentNav = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  width: 95%;
  height: 10%;
  border-bottom: 1px solid #b3b3b3;
`;

const ProfileContent = styled.div`
  width: 95%;
  height: 90%;
  padding: 30px 5px 30px 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export {
  RightContentContainer,
  ProfileTitleContent,
  ProfileName,
  ProfileSocialId,
  StackContainer,
  ProfileContentContainer,
  ProfileContentNav,
  ProfileContent,
};
