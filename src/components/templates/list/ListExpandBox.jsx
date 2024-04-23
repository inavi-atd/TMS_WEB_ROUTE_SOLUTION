// icon
import { VscClose } from "react-icons/vsc";
import { VscMenu } from "react-icons/vsc";
import { FaRegCircle } from "react-icons/fa";

// components
import { ButtonGroup } from "components/atoms/button/ButtonGroup";
import { randomColorState } from "recoils/commonState";
import { useRecoilValue } from "recoil";
import { InputField } from "../field/InputField";

export const ListExpandBox = ({ expandData, colorIdx }) => {
  const randomColor = useRecoilValue(randomColorState);

  return (
    <div className="expand_box">
      {expandData.map(
        (
          {
            areaTime,
            areaDistance,
            area,
            workingHours,
            travelTime,
            memo,
            color,
          },
          idx
        ) => (
          <div className="expand_box_area" key={idx}>
            <span
              className="dash_line"
              style={{
                borderColor: randomColor[colorIdx],
              }}
            ></span>
            <div className="area_option">
              <span className="badge">
                <FaRegCircle
                  style={{
                    fill: randomColor[colorIdx],
                    width: "14px",
                    height: "10px",
                  }}
                />
              </span>
            </div>
            <div className="area_left">
              <strong className="time">{areaTime}</strong>
              <span className="distance">{areaDistance}km</span>
            </div>
            <span
              className="area_index"
              style={{ background: randomColor[colorIdx] }}
            >
              {idx === 0 ? "출발" : idx}
            </span>
            <div className="area_right">
              <div className="expand_header">
                <div className="title">{area}</div>
                {/* 🐽 권역 확정, 권역 삭제 버튼 임시 제거 : 추후 기능 확정 시, 사용*/}
                {/* <div className="title_control">
                  <ButtonGroup
                    button={[
                      {
                        icon: (
                          <VscMenu
                            style={{
                              fill: "var(--gray-400)",
                              width: "16px",
                              height: "12px",
                            }}
                          />
                        ),
                        className: "list_down_btn",
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
                        className: "area_expand_btn",
                      },
                    ]}
                  />
                </div> */}
              </div>
              <div className="expand_detail">
                <span className="working_hours">작업 {workingHours}분</span>
                <span className="travel_time">이동 {travelTime}분</span>
              </div>
              {/* 🐽 1차 라이트 버전 제거 [240423] */}
              {/* <InputField
                type="text"
                className="expand_memo"
                placeholder="메모 입력"
              /> */}
            </div>
          </div>
        )
      )}
    </div>
  );
};
