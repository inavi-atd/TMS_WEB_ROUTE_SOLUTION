// style
import "styles/components/_checkbox.scss";

export const CheckBox = ({ children }) => {
  return (
    <>
      <div className="checkbox_form">
        <input id="checkbox" type="checkbox" />
        <label htmlFor="checkbox">{children}</label>
      </div>
    </>
  );
};
