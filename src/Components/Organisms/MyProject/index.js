import { MyStudyItem } from "../../Molecules/MyPostItem";
import {
  MyPostContainer,
  MyPostContent,
  PostTitle,
  PostTitleDiv,
} from "../MyPost/styles";
import ProjectData from "../../../Common/testData/MyPostProjectData.json";

const PostedProjectArea = () => {
  let projectNum = 0;
  const OrganizerProjectData = ProjectData.res.map((item, index) => {
    if (item.authorId === item.organizerId) {
      projectNum = projectNum + 1;
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
        <PostTitle>내가 게시한 프로젝트 ({projectNum})</PostTitle>
      </PostTitleDiv>
      <MyPostContent>{OrganizerProjectData}</MyPostContent>
    </>
  );
};

const JoinedProjectArea = () => {
  let projectNum = 0;
  const JoinedProjectData = ProjectData.res.map((item, index) => {
    if (item.join && item.InProgress === false) {
      projectNum = projectNum + 1;
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
        <PostTitle>내가 신청한 프로젝트 ({projectNum})</PostTitle>
      </PostTitleDiv>
      <MyPostContent>{JoinedProjectData}</MyPostContent>
    </>
  );
};

const ProjectInProgressArea = () => {
  let projectNum = 0;
  const InProgressProjectData = ProjectData.res.map((item, index) => {
    if (
      (item.authorId === item.organizerId || item.join) &&
      item.InProgress === true
    ) {
      projectNum = projectNum + 1;
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
        <PostTitle>진행 중인 프로젝트 ({projectNum})</PostTitle>
      </PostTitleDiv>
      <MyPostContent>{InProgressProjectData}</MyPostContent>
    </>
  );
};

const MyProject = () => {
  return (
    <>
      <MyPostContainer>
        <PostedProjectArea />
        <JoinedProjectArea />
        <ProjectInProgressArea />
      </MyPostContainer>
    </>
  );
};

export default MyProject;
