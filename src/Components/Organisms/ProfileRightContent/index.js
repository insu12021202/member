import { useState } from "react";
import Stack from "../../Atoms/Stack";
import { MyPageNavItem } from "../../Templetes/Profile/styles";
import MyInfo from "../MyInfo";
import MyPost from "../MyPost";
import MyProject from "../MyProject";
import MyStudy from "../MyStudy";
import {
  ProfileContent,
  ProfileContentContainer,
  ProfileContentNav,
  ProfileName,
  ProfileSocialId,
  ProfileTitleContent,
  RightContentContainer,
  StackContainer,
} from "./styles";

const ProfileRightContent = () => {
  const [item, setItem] = useState("0");
  const onClick = (event) => {
    let key = event.target.dataset.key;
    setItem(key);
  };
  return (
    <>
      <RightContentContainer>
        <ProfileTitleContent>
          <ProfileName>여인수</ProfileName>
          <ProfileSocialId>insu12@ajou.ac.kr</ProfileSocialId>
          <StackContainer>
            <Stack type="HTML"></Stack>
            <Stack type="CSS"></Stack>
            <Stack type="JavaScript"></Stack>
          </StackContainer>
        </ProfileTitleContent>
        <ProfileContentContainer>
          <ProfileContentNav>
            <MyPageNavItem data-key="0" onClick={onClick} active={item === "0"}>
              내 정보
            </MyPageNavItem>
            <MyPageNavItem data-key="1" onClick={onClick} active={item === "1"}>
              내가 쓴 글
            </MyPageNavItem>
            <MyPageNavItem data-key="2" onClick={onClick} active={item === "2"}>
              스터디 현황
            </MyPageNavItem>
            <MyPageNavItem data-key="3" onClick={onClick} active={item === "3"}>
              프로젝트 현황
            </MyPageNavItem>
          </ProfileContentNav>
          <ProfileContent>
            {item ? (
              <>
                {item === "0" && <MyInfo />}
                {item === "1" && <MyPost />}
                {item === "2" && <MyStudy />}
                {item === "3" && <MyProject />}
              </>
            ) : null}
          </ProfileContent>
        </ProfileContentContainer>
      </RightContentContainer>
    </>
  );
};

export default ProfileRightContent;
