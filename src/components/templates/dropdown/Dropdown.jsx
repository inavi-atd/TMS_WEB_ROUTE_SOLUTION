// common
import { useRecoilState } from "recoil";

// components
import { Label } from "../../atoms/label/Label";

// style
import "styles/components/_dropdown.scss";

// recoil
import { openState } from "recoils/commonState";

export const Dropdown = ({ className, children, value, icon }) => {
  const [isOpen, setIsOpen] = useRecoilState(openState);

  return (
    <div className="dropdown_box" onClick={() => setIsOpen((prev) => !prev)}>
      <Label className="dropdown_label" icon={icon}>
        {value}
      </Label>
      {isOpen && (
        <ul className={isOpen ? "open select_option" : "select_option"}>
          {children}
        </ul>
      )}
    </div>
  );
};
