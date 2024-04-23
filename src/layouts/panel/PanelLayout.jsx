// common
import { useRecoilValue } from "recoil";

// style
import "styles/components/_header.scss";

// components
import { EnterDataCard } from "./card/EnterDataCard";
import { PositionFixCard } from "./card/PositionFixCard";
import { TimeFixCard } from "./card/TimeFixCard";
import { InputVehicleCard } from "./card/InputVehicleCard";
import { VehicleCard } from "./card/VehicleCard";
import { OptimizationCriteriaCard } from "./card/OptimizationCriteriaCard";

import { activeState } from "recoils/commonState";

export const PanelLayout = () => {
  const isActive = useRecoilValue(activeState);
  return (
    <div className="card_wrap">
      <div className="card_inner">
        <EnterDataCard />
        <PositionFixCard />
        <TimeFixCard />
        {isActive.menuActive === 0 ? (
          <>
            <InputVehicleCard />
            <VehicleCard />
          </>
        ) : (
          <OptimizationCriteriaCard></OptimizationCriteriaCard>
        )}
      </div>
    </div>
  );
};
