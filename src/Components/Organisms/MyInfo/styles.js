import styled from "styled-components";
import Stack from "../../Atoms/Stack";
import { StackContainer } from "../ProfileRightContent/styles";

const ProfileContentDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  span {
    font-size: 18px;
    color: #707070;
  }
  .data {
    margin-left: 20px;
  }
`;

const MyInfoStackContainer = styled(StackContainer)`
  margin: 0;
  margin-left: 20px;
`;

export { ProfileContentDiv, MyInfoStackContainer };
