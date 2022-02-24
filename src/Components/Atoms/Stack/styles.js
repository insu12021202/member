import styled from "styled-components";

const StyledStack = styled.h3`
  display: inline;
  width: 66px;
  height: 25px;
  font-size: ${(props) => props.size || "14px"};
  font-weight: 500;
  border-radius: 14px;
  padding: 0 15px 0 15px;
  margin-right: 10px;
`;

const HtmlStack = styled(StyledStack)`
  border: 2px solid #f3360e;
  color: #f3360e;
`;
const CssStack = styled(StyledStack)`
  border: 2px solid #0e79f3;
  color: #0e79f3;
`;
const JavaScriptStack = styled(StyledStack)`
  border: 2px solid #f3b707;
  color: #f3b707;
`;

export { StyledStack, HtmlStack, CssStack, JavaScriptStack };
