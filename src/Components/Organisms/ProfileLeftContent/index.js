import {
  LeftContentContainer,
  ProfileImg,
  ProfileIntroContent,
} from "./styles";

const ProfileLeftContent = () => {
  return (
    <>
      <LeftContentContainer>
        <ProfileImg src="https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427__340.jpg" />
        <ProfileIntroContent>
          <span>소개글</span>
          <span>
            안녕하세요 미디어학과 18학번 여인수입니다.길이 초과 테스트 길이 초과
            테스트 길이 초과 테스트
          </span>
        </ProfileIntroContent>
        <ProfileIntroContent>
          <span>연락처</span>
          <span>insu12@ajou.ac.kr</span>
          <span>010-1234-5678</span>
        </ProfileIntroContent>
      </LeftContentContainer>
    </>
  );
};

export default ProfileLeftContent;
