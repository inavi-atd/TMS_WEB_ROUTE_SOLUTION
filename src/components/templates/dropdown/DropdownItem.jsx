// common
import { useRecoilState } from "recoil";

// recoil
import { openState } from "recoils/commonState";

export const DropdownItem = ({ className, children, onClick }) => {
  // const [isOpen, setIsOpen] = useRecoilState(openState);

  return (
    <li
      className={`option ${className}`}
      onClick={onClick}
      // onClick={() => {
      //   setIsOpen(!isOpen);
      // }}
    >
      <a href="/#">{children}</a>
    </li>
  );
};
