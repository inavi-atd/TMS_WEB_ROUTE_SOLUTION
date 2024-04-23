// common
import { useRecoilState } from "recoil";

// style
import "styles/components/_button.scss";

// components
import { Button } from "components/atoms/button/Button";
import { Label } from "components/atoms/label/Label";

// recoil
import { activeState } from "recoils/commonState";
import { InputField } from "components/templates/field/InputField";
import { inputVehicleList } from "constants/panel/inputVehicleConst";
import { ErrorMessage } from "components/templates/message/ErrorMessage";

/**
 * @desc 투입 차량 컴포넌트 입니다.
 * @returns
 */
export const InputVehicleCard = () => {
  const [isActive, setIsActive] = useRecoilState(activeState);

  return (
    <div className="card_box">
      <div className="card_header">
        <Label className="essential">투입 차량</Label>
      </div>
      <div className="card_container">
        <div
          className={
            isActive.inputVehicleActive === 1 ? "btn_group" : "btn_group none"
          }
        >
          {inputVehicleList.map((el, idx) => {
            return (
              <Button
                key={idx}
                className={
                  isActive.inputVehicleActive === idx ? "btn active" : "btn"
                }
                onClick={() =>
                  setIsActive((prev) => ({
                    ...prev,
                    inputVehicleActive: idx,
                  }))
                }
              >
                {el.title}
              </Button>
            );
          })}
        </div>
        {isActive.inputVehicleActive === 1 && (
          <>
            <div className="case_option_box">
              <div className="case_wrap">
                <Label>투입 차량 수</Label>
                <div className="case_inner">
                  <div className="case">
                    <InputField
                      type="text"
                      label="대"
                      full
                      placeholder="00"
                    ></InputField>
                  </div>
                </div>
              </div>
            </div>
            <ErrorMessage>투입 차량 수를 입력해주세요.</ErrorMessage>
          </>
        )}
      </div>
    </div>
  );
};
