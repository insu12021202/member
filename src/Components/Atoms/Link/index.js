import { Link } from "react-router-dom";

const LinkComponent = ({ isActive, text, ...props }) => {
  return <Link {...props}>{text}</Link>;
};

export default LinkComponent;
