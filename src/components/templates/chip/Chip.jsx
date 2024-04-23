// style
import "styles/components/_chips.scss";

// components
import { Button } from "components/atoms/button/Button";

export const Chip = ({
  children,
  text,
  onClick,
  beforeIcon,
  afterIcon,
  className,
}) => {
  return (
    <div className={`${className} chip_wrap`}>
      <div className="chip_text">
        {beforeIcon && <>{beforeIcon}</>}
        {children}
        {afterIcon && <Button onClick={onClick}>{afterIcon}</Button>}
      </div>
    </div>
  );
};
