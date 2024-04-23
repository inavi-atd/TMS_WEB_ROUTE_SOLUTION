// style
import "styles/components/_message.scss";

export const ErrorMessage = ({ children }) => {
  return <div className="error_message">{children}</div>;
};
