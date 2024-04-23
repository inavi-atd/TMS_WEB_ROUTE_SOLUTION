// common
import { useState } from "react";

// icon
import { VscClose } from "react-icons/vsc";
import { GrLayer } from "react-icons/gr";

// components
import { ButtonGroup } from "components/atoms/button/ButtonGroup";

/**
 * @desc 리스트의 하위 컴포넌트
 * @returns
 */
export const ListItem = ({
  color,
  name,
  count,
  time,
  button,
  descBox,
  expandBox,
  onClick,
}) => {
  const [selectItem, setIsSelectItem] = useState(false);

  return (
    <div className={`${selectItem ? "list_item active" : "list_item"}`}>
      <div
        className="list_area"
        onClick={(e) => {
          e.stopPropagation();
          setIsSelectItem((prev) => !prev);
        }}
      >
        <div className="item_header">
          <div className="text_area">
            <span className="badge" style={{ ...color }}></span>
            <strong className="name">{name}</strong>
            <span>
              (방문 <strong className="count">{count}</strong>건)
            </span>
          </div>
          {/* 🐽 1차 라이트 버전 제거 [240423] */}
          {/* <ButtonGroup
            button={[
              {
                icon: (
                  <GrLayer
                    style={{
                      stroke: "var(--gray-400)",
                      width: "16px",
                      height: "12px",
                    }}
                  />
                ),
              },
              {
                icon: (
                  <VscClose
                    style={{
                      fill: "var(--gray-400)",
                      width: "16px",
                      height: "16px",
                    }}
                  />
                ),
              },
            ]}
          /> */}
        </div>
        <div className="item_content">
          <div className="content_area">{descBox}</div>
        </div>
      </div>

      {selectItem && (
        <div className="item_expand_content">
          <div className="expand_area">{expandBox}</div>
        </div>
      )}
    </div>
  );
};
