import styled from "styled-components";

const LeftContentContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProfileImg = styled.img`
  margin-top: -80px;
  margin-bottom: 30px;
  object-fit: cover;
  width: 300px;
  height: 300px;
`;

const ProfileIntroContent = styled.div`
  width: 300px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  span {
    &:first-child {
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 10px;
      color: #707070;
    }
    &:not(:first-child) {
      font-size: 16px;
      margin-bottom: 10px;
      color: #707070;
    }
  }
`;

export { LeftContentContainer, ProfileImg, ProfileIntroContent };
