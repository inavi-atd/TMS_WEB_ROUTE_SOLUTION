// common
import { useRecoilState } from "recoil";

// recoil
import { optionState } from "recoils/commonState";

// components
import { Label } from "components/atoms/label/Label";
import { InputField } from "components/templates/field/InputField";

// style
import "styles/components/_button.scss";

export const VehicleCard = () => {
  const [option] = useRecoilState(optionState);

  return (
    <div className="card_box">
      <div className="card_header">
        <Label className="essential">차량 별 조건</Label>
      </div>
      <div className="card_container">
        <div className="case_option_box">
          <div className="case_wrap">
            <>
              <Label>유효 편차</Label>
              {option.type === "time" ? (
                <>
                  {/* dropdown 옵션값이 '시간 최적화' 일 경우 노출 */}
                  <div className="case_inner">
                    <div className="case">
                      <InputField type="text" placeholder="00" label="시간" />
                    </div>
                    <div className="case">
                      <InputField type="text" placeholder="00" label="분" />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* dropdown 옵션값이 '거리 최적화'/'건수 최적화' 일 경우 노출 */}
                  <div className="case_inner">
                    <div className="case">
                      <InputField
                        type="text"
                        placeholder="00"
                        label={option.type === "distance" ? "km" : "건"}
                        full
                      />
                    </div>
                  </div>
                </>
              )}
            </>
          </div>
          <div className="case_wrap">
            {option.type === "time" ? (
              <>
                <Label>최대 운행 시간</Label>
                {/* dropdown 옵션값이 '시간 최적화' 일 경우 노출 */}
                <div className="case_inner">
                  <div className="case">
                    <InputField type="text" placeholder="00" label="시간" />
                  </div>
                  <div className="case">
                    <InputField type="text" placeholder="00" label="분" />
                  </div>
                </div>
              </>
            ) : (
              <>
                <Label>
                  {option.type === "distance"
                    ? "최대 운행 거리"
                    : "최대 방문자 수"}
                </Label>
                {/* dropdown 옵션값이 '거리 최적화'/'건수 최적화' 일 경우 노출 */}
                <div className="case_inner">
                  <div className="case">
                    <InputField
                      type="text"
                      placeholder="00"
                      label={option.type === "distance" ? "km" : "건"}
                      full
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
