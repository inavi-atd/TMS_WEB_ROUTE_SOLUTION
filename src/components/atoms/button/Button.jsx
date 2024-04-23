// common
import React from "react";

// styles
import "styles/components/_button.scss";

// Button.jsx
export const Button = ({
  icon,
  className,
  onClick,
  children,
  disabled,
  count,
}) => {
  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <>{icon}</>}
      {children}
      {count}
    </button>
  );
};
