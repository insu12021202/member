import { user } from "../../../Common/Style/testData/testdata";
import { Button } from "../../Atoms/Button";
import Span from "../../Atoms/Span";
import Header from "../../Organisms/Header";
import { Container } from "../Main/styles";
import { MyPageSpan, ProfileContainer, ProfileContentWrapper } from "./styles";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.css";

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
            <div className="ProfileLeftContent">
              <img
                className="ProfileImg"
                width="300px"
                height="300px"
                src="https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427__340.jpg"
              />
              <div className="ProfileIntroContent">
                <span>소개글</span>
                <span>
                  안녕하세요 미디어학과 18학번 여인수입니다.길이 초과 테스트
                  길이 초과 테스트 길이 초과 테스트
                </span>
              </div>
              <div className="ProfileIntroContent">
                <span>연락처</span>
                <span>insu12@ajou.ac.kr</span>
                <span>010-1234-5678</span>
              </div>
            </div>
            <div className="ProfileRightContent">
              <div className="ProfileTitleContent">
                <span>여인수</span>
                <span>insu12@ajou.ac.kr</span>
                <div className="ProfileStackContent">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                </div>
                <div className="ProfileContentContainer">
                  <div className="ProfileContentNav">
                    <span>내 정보</span>
                    <span>내가 쓴 글</span>
                    <span>스터디 현황</span>
                    <span>프로젝트 현황</span>
                  </div>
                  <div className="ProfileContent">
                    <span>아이디: 여인수</span>
                    <span>소셜 아이디: insu12@ajou.ac.kr</span>
                    <span>백준 랭크: Bronze</span>
                    <span>사용 기술 스택: HTML CSS JS</span>
                  </div>
                </div>
              </div>
            </div>
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
