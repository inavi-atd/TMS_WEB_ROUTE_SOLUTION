// common
import { useRecoilState } from "recoil";

// style
import "styles/components/_button.scss";

// components
import { Button } from "components/atoms/button/Button";
import { Label } from "components/atoms/label/Label";
import { DatePickerField } from "components/templates/field/DatePickerField";
import { InputField } from "components/templates/field/InputField";

// constant
import { timeFixList } from "constants/panel/timeFIxConst";

// recoil
import { activeState } from "recoils/commonState";

/**
 * @desc 시간 고정 컴포넌트 입니다.
 * @returns
 */
export const TimeFixCard = () => {
  const [isActive, setIsActive] = useRecoilState(activeState);

  return (
    <div className="card_box">
      <div className="card_header">
        <Label className="essential">시간 고정</Label>
      </div>
      <div className="card_container">
        <div className="btn_group">
          {timeFixList.map((el, idx) => {
            return (
              <Button
                key={idx}
                className={isActive.timeActive === idx ? "btn active" : "btn"}
                onClick={() =>
                  setIsActive((prev) => ({
                    ...prev,
                    timeActive: idx,
                  }))
                }
              >
                {el.title}
              </Button>
            );
          })}
        </div>
        <div className="case_option_box">
          {/* '출발 시간' / '도착 시간' 버튼 활성화 여부에 따른 문구 변경 */}
          <DatePickerField
            text={
              isActive.timeActive === 0
                ? "최초 배송 출발 일시"
                : isActive.timeActive === 1 && "최초 배송 종료 일시"
            }
          />
          <div className="case_wrap">
            <Label>최대 운행 시간</Label>
            <div className="case_inner">
              <div className="case">
                <InputField
                  type="text"
                  placeholder="00"
                  label="시간"
                ></InputField>
              </div>
              <div className="case">
                <InputField
                  type="text"
                  placeholder="00"
                  label="분"
                ></InputField>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
