import Header from "../../Organisms/Header";
import { ContentWrapper } from "../Main/styles";
import { Container } from "../Register/styles";
import {
  FaPlay,
  FaAngleDoubleRight,
  FaAngleDoubleLeft,
  FaSearch,
} from "react-icons/fa";
import {
  PlContainer,
  PlContentWrapper,
  VideoUiWrapper,
  VideoWrapper,
  PlImg,
  VideoCtrBtn,
  VideoBtnWrapper,
  VideoPlayBtn,
  UserPlayList,
  PlUl,
  PlLi,
  PlInputWrapper,
  PlLiInfoContainer,
  PlLiInfoImgContainer,
  PlInput,
  PlForm,
  PlSubmitBtn,
} from "./styles";
import { Button } from "../../Atoms/Button";

const MakeLi = () => {
  const arr = Array.from({ length: 10 }, () => 0);
  return (
    <>
      {arr.map(function () {
        return (
          <PlLi key={Math.random()}>
            <PlLiInfoImgContainer>
              <img
                alt=""
                src="https://cdn.notefolio.net/img/8c/43/8c43d0ca423b2ae8ba0be7c106837a4fc37997cbde4e13ae13cc05571f30ffa1_v1.jpg"
                width="70px"
                height="70px"
              ></img>
            </PlLiInfoImgContainer>
            <PlLiInfoContainer>
              <span>노래 제목</span>
              <span>가수</span>
            </PlLiInfoContainer>
          </PlLi>
        );
      })}
    </>
  );
};

const PlayListTemplete = () => {
  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Container>
        <Header></Header>
        <ContentWrapper>
          <PlContainer>
            <PlContentWrapper>
              <VideoUiWrapper>
                <VideoWrapper>
                  <span>노래 제목입니다</span>
                  <span>가수입니다</span>
                  <PlImg src="https://cdn.notefolio.net/img/8c/43/8c43d0ca423b2ae8ba0be7c106837a4fc37997cbde4e13ae13cc05571f30ffa1_v1.jpg"></PlImg>
                </VideoWrapper>
                <VideoBtnWrapper>
                  <VideoCtrBtn>
                    <FaAngleDoubleLeft size="18px" color="#28282F" />
                  </VideoCtrBtn>
                  <VideoPlayBtn>
                    <FaPlay size="20px" color="#28282F" />
                  </VideoPlayBtn>
                  <VideoCtrBtn>
                    <FaAngleDoubleRight size="18px" color="#28282F" />
                  </VideoCtrBtn>
                </VideoBtnWrapper>
              </VideoUiWrapper>
              <UserPlayList>
                <PlUl>{MakeLi()}</PlUl>
              </UserPlayList>
            </PlContentWrapper>
            <PlInputWrapper>
              <PlForm onSubmit={onSubmit}>
                <PlInput
                  width="400px"
                  type="text"
                  placeholder="유튜브 제목 검색"
                ></PlInput>
                <PlSubmitBtn type="submit">
                  <FaSearch color="#F3F1F2" size="20px" />
                </PlSubmitBtn>
              </PlForm>
            </PlInputWrapper>
          </PlContainer>
        </ContentWrapper>
      </Container>
    </>
  );
};

export default PlayListTemplete;
