import styled from "styled-components";

const Container = styled.input`
  width: ${({ width }) => width};
  height: 40px;
  &:focus {
    outline: none;
  }
  padding: 5px;
`;

export default Container;
