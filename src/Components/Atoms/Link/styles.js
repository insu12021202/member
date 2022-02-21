import styled from "styled-components";
import LinkComponent from ".";

const StyledLink = styled(LinkComponent)`
  box-sizing: border-box;
  display: block;
  padding: 4px 8px;
  margin: 0 auto;
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;

  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
`;

export default StyledLink;
