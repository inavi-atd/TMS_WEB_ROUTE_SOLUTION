// common
import { useRecoilValue } from "recoil";

// icons
import { RiMapPin2Line } from "react-icons/ri";

// components
import { Button } from "components/atoms/button/Button";
import { Label } from "components/atoms/label/Label";

import { activeState } from "recoils/commonState";
import { ListUnallocatedBox } from "./ListUnallocatedBox";
import { useState } from "react";

export const ListDataBox = ({
  labelText,
  onClick,
  htmlFor,
  text,
  icon,
  data,
}) => {
  const isActive = useRecoilValue(activeState);
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="data_box">
      <div className="box_area">
        <div className="data_title">
          <Label htmlFor={htmlFor}>{labelText}</Label>
          <Button
            onClick={onClick}
            icon={<RiMapPin2Line />}
            className="reflects_parking_location_btn"
          >
            주정차 위치 반영
          </Button>
        </div>
        <div className="data_value">
          {data.map(({ value, label, hour, minute }, idx) => {
            return (
              <div key={idx} className="value_box">
                {/* 클러스터링 > 시간 최적화 | 평균 예상 소요 시간 분기 처리 */}
                {isActive.menuActive === 0 ? (
                  idx !== 1 ? (
                    <strong className="value">{value}</strong>
                  ) : (
                    <strong className="value">
                      {hour}
                      <span className="value_unit">시간</span>
                      {minute}
                      <span className="value_unit">분</span>
                    </strong>
                  )
                ) : // {/* TSP > 경로 최적화 | 평균 예상 소요 시간 분기 처리 */}
                idx !== 0 ? (
                  <strong className="value">{value}</strong>
                ) : (
                  <strong className="value">
                    {hour}
                    <span className="value_unit">시간</span>
                    {minute}
                    <span className="value_unit">분</span>
                  </strong>
                )}

                <div className="value_label">{label}</div>
              </div>
            );
          })}
        </div>
        {/* '미할당 업무' 버튼 클릭 시,  미할당 업무 제공 리스트 표출 제어 */}
        {isActive.menuActive === 0 && (
          <div className={`${isShow ? "data_util active" : "data_util"}`}>
            <Button
              className="unallocated_work_btn"
              onClick={() => {
                setIsShow((prev) => !prev);
              }}
              count={
                <>
                  <div className="util_text">미할당 업무</div>
                  <strong className="util_count">
                    6<span className="util_unit">건</span>
                  </strong>
                </>
              }
            />
            <ListUnallocatedBox data={[{}]}></ListUnallocatedBox>
          </div>
        )}
      </div>
    </div>
  );
};
