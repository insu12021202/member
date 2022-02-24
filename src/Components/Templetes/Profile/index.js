import { user } from "../../../Common/testData/testdata";
import Header from "../../Organisms/Header";
import { Container } from "../Main/styles";
import { MyPageSpan, ProfileContainer, ProfileContentWrapper } from "./styles";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.css";
import ProfileLeftContent from "../../Organisms/ProfileLeftContent";
import ProfileRightContent from "../../Organisms/ProfileRightContent";

const ProfileTemplete = () => {
  let navigate = useNavigate();
  const LogOut = () => {
    user.isLoggedIn = false;
    navigate("/");
  };
  return (
    <>
      <Container>
        <Header></Header>
        <ProfileContainer>
          <MyPageSpan>마이페이지</MyPageSpan>
          <ProfileContentWrapper>
            <ProfileLeftContent />
            <ProfileRightContent />
          </ProfileContentWrapper>
        </ProfileContainer>
      </Container>
    </>
  );
};

{
  /* <Button text="로그아웃" onClick={LogOut} /> */
}

export default ProfileTemplete;
