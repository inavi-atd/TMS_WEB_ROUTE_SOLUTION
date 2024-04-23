// common
import { useRecoilState, useRecoilValue } from "recoil";

// style
import "styles/layouts/_panel.scss";

// constant
import { panelOptionConst } from "constants/panel/panelOptionConst";

// icon
import { GoChevronDown } from "react-icons/go";

// components
import { Button } from "components/atoms/button/Button";
import { Dropdown } from "components/templates/dropdown/Dropdown";
import { DropdownItem } from "components/templates/dropdown/DropdownItem";

// recoil
import { activeState, openState, optionState } from "recoils/commonState";

// function
import { usePanel } from "hooks/panel/usePanel";
import { PanelLayout } from "./PanelLayout";
import useRandomColor from "hooks/panel/useRandomColor";
import { testConst } from "constants/panel/optimizationListConst";
import { Label } from "components/atoms/label/Label";

export const Panel = ({ setView }) => {
  const isActive = useRecoilValue(activeState);
  const isOpen = useRecoilValue(openState);
  const option = useRecoilValue(optionState);
  const { onChangePanel } = usePanel();
  const { onChangeRandomColor } = useRandomColor();

  return (
    <div className="panel_wrap">
      <div className="panel_inner">
        <div className="option">
          {isActive.menuActive === 0 ? (
            <Dropdown
              value={
                option === ""
                  ? option.title
                  : panelOptionConst.filter(
                      (el) => el && el.type === option.type
                    )[0].title
              }
              icon={<GoChevronDown />}
            >
              {panelOptionConst.map((el, idx) => {
                return (
                  isOpen && (
                    <DropdownItem
                      key={idx}
                      className={isOpen ? "open" : ""}
                      onClick={() => {
                        onChangePanel(el);
                      }}
                    >
                      {el.title}
                    </DropdownItem>
                  )
                );
              })}
            </Dropdown>
          ) : (
            <Label className="option_label">경로 최적화</Label>
          )}
        </div>
        <PanelLayout />
      </div>
      <div className="panel_footer">
        <Button
          className="active_btn"
          onClick={() => {
            onChangeRandomColor(testConst);
            setView(true);
          }}
        >
          최적화 실행
        </Button>
      </div>
    </div>
  );
};
