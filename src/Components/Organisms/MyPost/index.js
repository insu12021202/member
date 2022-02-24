import { MyPostItem, MyCommentItem } from "../../Molecules/MyPostItem";
import {
  MyPostContainer,
  MyPostContent,
  PostTitle,
  PostTitleDiv,
} from "./styles";
import MyPostData from "../../../Common/testData/MyPostData.json";
import MyCommentData from "../../../Common/testData/MyPostCommentData.json";

const PostAreaInMyPost = () => {
  const data = MyPostData.res.map((item, index) => {
    return (
      <div key={index}>
        <MyPostItem
          key={index}
          title={item.title}
          board="자유게시판"
          date={item.date}
        />
      </div>
    );
  });
  return (
    <>
      <PostTitleDiv>
        <PostTitle>게시글 ({data.length})</PostTitle>
      </PostTitleDiv>
      <MyPostContent>{data}</MyPostContent>
    </>
  );
};

const CommentAreaInMyPost = () => {
  const data = MyCommentData.res.map((item, index) => {
    return (
      <div key={index}>
        <MyCommentItem
          key={index}
          title={item.title}
          board="자유게시판"
          date={item.date}
          comment={item.comment}
        />
      </div>
    );
  });
  return (
    <>
      <PostTitleDiv>
        <PostTitle>댓글 ({data.length})</PostTitle>
      </PostTitleDiv>
      <MyPostContent>{data}</MyPostContent>
    </>
  );
};

const MyPost = () => {
  return (
    <>
      <MyPostContainer>
        <PostAreaInMyPost />
        <CommentAreaInMyPost />
      </MyPostContainer>
    </>
  );
};

export default MyPost;
