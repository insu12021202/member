import { PostComment } from "../../Organisms/MyPost/styles";
import {
  MyPostContentItem,
  MyPostContentItemSub,
  PostDate,
  PostTitleText,
  PostType,
} from "./styles";

const MyPostItem = ({ title, board, date }) => {
  return (
    <>
      <MyPostContentItem>
        <PostTitleText>{title}</PostTitleText>
        <MyPostContentItemSub>
          <PostType>{board}</PostType>
          <PostDate>{date}</PostDate>
        </MyPostContentItemSub>
      </MyPostContentItem>
    </>
  );
};

const MyCommentItem = ({ title, board, date, comment }) => {
  return (
    <>
      <MyPostContentItem>
        <PostTitleText>{title}</PostTitleText>
        <MyPostContentItemSub>
          <PostType>{board}</PostType>
          <PostDate>{date}</PostDate>
          <div>
            <PostComment>{comment}</PostComment>
          </div>
        </MyPostContentItemSub>
      </MyPostContentItem>
    </>
  );
};

const MyStudyItem = ({ title, HeadCount, MaxCount }) => {
  return (
    <>
      <MyPostContentItem>
        <PostTitleText>{title}</PostTitleText>
        <MyPostContentItemSub>
          <PostType>신청 인원 : </PostType>
          <PostDate>
            {HeadCount} / {MaxCount}
          </PostDate>
        </MyPostContentItemSub>
      </MyPostContentItem>
    </>
  );
};

export { MyPostItem, MyCommentItem, MyStudyItem };
