import styled from "styled-components";
import { BtnContainer } from "../../Atoms/Button/styles";
import Container from "../../Atoms/Input/styles";

const PlContainer = styled.div`
  width: 70%;
  height: 90%;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: #f3f1f2;
`;
const PlContentWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 85%;
`;

const VideoUiWrapper = styled.div`
  width: 40%;
  height: 100%;
  background-color: #28282f;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
  span:first-child {
    color: whitesmoke;
    font-size: 25px;
  }
  span:nth-child(2) {
    color: #d8d8d8;
    font-size: 17px;
  }
`;

const PlImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-top: 50px;
`;

const VideoBtnWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 20%;
`;
const VideoCtrBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: #f3f1f2;
`;

const VideoPlayBtn = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f1f2;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 8px 20px;
`;

const UserPlayList = styled.div`
  width: 60%;
  height: 100%;
`;

const PlUl = styled.ul`
  overflow: auto;
  width: 100%;
  height: 100%;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    height: 17%;
    background-color: #28282f;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
  }
`;

const PlLi = styled.li`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  &:nth-child(1) {
    border-top: none;
  }
`;

const PlLiInfoContainer = styled.div`
  width: 70%;
  height: 100%;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  span:first-child {
    color: black;
    font-size: 18px;
    margin-bottom: 2px;
  }
  span:last-child {
    color: grey;
  }
`;

const PlLiInfoImgContainer = styled.div`
  width: 30%;
  height: 100%;
  padding-left: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    border-radius: 10px;
  }
`;

const PlInputWrapper = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlInput = styled(Container)`
  background-color: #28282f;
  height: 50px;
  border-radius: 20px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 10px;
  text-align: center;
  color: whitesmoke;
  font-size: 17px;
`;

const PlSubmitBtn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #28282f;
  margin-left: 5px;
`;

const PlForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
  padding: 5px;
`;

export {
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
};
