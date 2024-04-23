// components
import { Button } from "components/atoms/button/Button";

export const Header = ({ children, beforeIcon, afterIcon, onClick }) => {
  return (
    <div className="title_area">
      {beforeIcon && <Button onClick={onClick}>{beforeIcon}</Button>}
      <h3 className="title">{children}</h3>
      {afterIcon && <Button onClick={onClick}>{afterIcon}</Button>}
    </div>
  );
};
