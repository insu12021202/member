import { MyStudyItem } from "../../Molecules/MyPostItem";
import {
  MyPostContainer,
  MyPostContent,
  PostTitle,
  PostTitleDiv,
} from "../MyPost/styles";
import StudyData from "../../../Common/testData/MyPostStudyData.json";

const PostedStudyArea = () => {
  let studyNum = 0;
  const OrganizerStudyData = StudyData.res.map((item, index) => {
    if (item.authorId === item.organizerId) {
      studyNum = studyNum + 1;
      return (
        <div key={index}>
          <MyStudyItem
            title={item.title}
            HeadCount={item.headCount}
            MaxCount={item.maxCount}
          />
        </div>
      );
    }
  });
  return (
    <>
      <PostTitleDiv>
        <PostTitle>내가 게시한 스터디 ({studyNum})</PostTitle>
      </PostTitleDiv>
      <MyPostContent>{OrganizerStudyData}</MyPostContent>
    </>
  );
};

const JoinedStudyArea = () => {
  let studyNum = 0;
  const JoinedStudyData = StudyData.res.map((item, index) => {
    if (item.join && item.InProgress === false) {
      studyNum = studyNum + 1;
      return (
        <div key={index}>
          <MyStudyItem
            title={item.title}
            HeadCount={item.headCount}
            MaxCount={item.maxCount}
          />
        </div>
      );
    }
  });
  return (
    <>
      <PostTitleDiv>
        <PostTitle>내가 신청한 스터디 ({studyNum})</PostTitle>
      </PostTitleDiv>
      <MyPostContent>{JoinedStudyData}</MyPostContent>
    </>
  );
};

const StudyInProgressArea = () => {
  let studyNum = 0;
  const InProgressStudyData = StudyData.res.map((item, index) => {
    if (
      (item.authorId === item.organizerId || item.join) &&
      item.InProgress === true
    ) {
      studyNum = studyNum + 1;
      return (
        <div key={index}>
          <MyStudyItem
            title={item.title}
            HeadCount={item.headCount}
            MaxCount={item.maxCount}
          />
        </div>
      );
    }
  });
  return (
    <>
      <PostTitleDiv>
        <PostTitle>진행 중인 스터디 ({studyNum})</PostTitle>
      </PostTitleDiv>
      <MyPostContent>{InProgressStudyData}</MyPostContent>
    </>
  );
};

const MyStudy = () => {
  return (
    <>
      <MyPostContainer>
        <PostedStudyArea />
        <JoinedStudyArea />
        <StudyInProgressArea />
      </MyPostContainer>
    </>
  );
};

export default MyStudy;
