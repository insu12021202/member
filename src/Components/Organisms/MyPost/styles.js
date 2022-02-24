import styled from "styled-components";

const MyPostContainer = styled.div`
  padding: 15px;
  width: 100%;
  min-height: 100%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 3px 10px;
  overflow: auto;
  color: #707070;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    height: 17%;
    background-color: #707070;
    border-radius: 10px;
  }
`;

const PostTitleDiv = styled.div`
  width: 100%;
  padding: 0 0 5px 0;
  border-bottom: 1px solid #707070;
`;

const PostTitle = styled.span`
  color: #525252;
  font-size: 20px;
`;

const PostComment = styled.span`
  color: #5a5a5a;
  margin-top: 10px;
  margin-left: 5px;
`;

const MyPostContent = styled.div`
  padding: 10px 5px 10px 5px;
`;

export { MyPostContainer, PostTitleDiv, PostTitle, PostComment, MyPostContent };
