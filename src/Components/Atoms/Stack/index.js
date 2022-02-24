import { CssStack, HtmlStack, JavaScriptStack, StyledStack } from "./styles";

const Stack = ({ type, size }) => {
  return (
    <>
      {type === "HTML" && <HtmlStack size={size}>{type}</HtmlStack>}
      {type === "CSS" && <CssStack size={size}>{type}</CssStack>}
      {type === "JavaScript" && (
        <JavaScriptStack size={size}>{type}</JavaScriptStack>
      )}
    </>
  );
};

export default Stack;
