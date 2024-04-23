// common
import { useRecoilState } from "recoil";

// components
import { Button } from "components/atoms/button/Button";
import { Label } from "components/atoms/label/Label";
import { OptimizationCriteriaConst } from "constants/panel/optimizationCriteriaConst";

// function
import { activeState } from "recoils/commonState";

export const OptimizationCriteriaCard = () => {
  const [isActive, setIsActive] = useRecoilState(activeState);

  return (
    <div className="card_box">
      <div className="card_header">
        <Label className="essential">최적화 기준</Label>
      </div>
      <div className="card_container">
        <div className="btn_group">
          {OptimizationCriteriaConst.map((el, idx) => {
            return (
              <Button
                key={idx}
                className={
                  isActive.optimizationCriteriaActive === idx
                    ? "btn active"
                    : "btn"
                }
                onClick={() =>
                  setIsActive((prev) => ({
                    ...prev,
                    optimizationCriteriaActive: idx,
                  }))
                }
              >
                {el.title}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
