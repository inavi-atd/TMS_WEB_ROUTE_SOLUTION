import { useState } from "react";

export const SelectBox = ({ className, children, value }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className={className} value={value} onClick={() => setIsOpen(!isOpen)}>
      {/* {isOpen && <a href="/#">{children}</a>} */}
      <a href="/#">{children}</a>
    </li>
  );
};
