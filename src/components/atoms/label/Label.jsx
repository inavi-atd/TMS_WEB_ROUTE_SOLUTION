// style
import "styles/components/_label.scss";

export const Label = ({ htmlFor, children, className, icon, beforeIcon }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={className ? `${className} label` : "label"}
    >
      {beforeIcon && <>{beforeIcon}</>} {children} {icon && <>{icon}</>}
    </label>
  );
};
