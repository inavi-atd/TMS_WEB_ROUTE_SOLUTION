// components
import { Button } from "components/atoms/button/Button";
import { Label } from "components/atoms/label/Label";
import { CheckBox } from "components/templates/form/CheckBox";
import { useRecoilState } from "recoil";
import { activeState } from "recoils/commonState";

// style
import "styles/components/_button.scss";

// constant
import { positionFixList } from "constants/panel/positionFixConst";

/**
 * @desc 위치 고정 컴포넌트 입니다.
 * @returns
 */
export const PositionFixCard = () => {
  const [isActive, setIsActive] = useRecoilState(activeState);

  return (
    <div className="card_box">
      <div className="card_header">
        <Label className="essential">위치 고정</Label>
      </div>
      <div className="card_container">
        <div className="btn_group">
          {positionFixList.map((el, idx) => {
            return (
              <Button
                key={idx}
                className={
                  isActive.positionActive === idx ? "btn active" : "btn"
                }
                onClick={() =>
                  setIsActive((prev) => ({
                    ...prev,
                    positionActive: idx,
                  }))
                }
              >
                {el.title}
              </Button>
            );
          })}
        </div>
        {/* '출발지(거점)' 선택 시에만 노출 */}
        {isActive.positionActive === 0 && (
          <CheckBox>종료 후 거점 복귀</CheckBox>
        )}
      </div>
    </div>
  );
};
