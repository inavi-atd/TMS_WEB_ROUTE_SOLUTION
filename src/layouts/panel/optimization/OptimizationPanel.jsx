// common
import { useRecoilState, useRecoilValue } from "recoil";

// icon
import { GoArrowLeft } from "react-icons/go";

// style
import "styles/layouts/_panel.scss";

// constant
import { testConst } from "constants/panel/optimizationListConst";

// components
import { Header } from "components/templates/header/Header";
import { List } from "components/templates/list/List";
import { ListItem } from "components/templates/list/ListItem";
import { ListSummaryBox } from "components/templates/list/ListSummaryBox";
import { ListDescBox } from "components/templates/list/ListDescBox";
import { ButtonGroup } from "components/atoms/button/ButtonGroup";
import { ListDataBox } from "components/templates/list/ListDataBox";
import {
  activeState,
  optionState,
  randomColorState,
} from "recoils/commonState";
import { ListExpandBox } from "components/templates/list/ListExpandBox";

/**
 * @desc 최적화 실행 컴포넌트
 * @returns
 */
export const OptimizationPanel = ({ setView }) => {
  const isActive = useRecoilValue(activeState);
  const option = useRecoilValue(optionState);
  const [randomColor] = useRecoilState(randomColorState);

  return (
    <div className="panel_wrap">
      <div className="panel_header">
        <Header
          beforeIcon={<GoArrowLeft />}
          onClick={() => {
            setView(false);
          }}
        >
          최적화 실행
        </Header>
      </div>
      <div className="panel_inner">
        <List
          dataBox={
            <ListDataBox
              labelText={
                // 🐽 isActive.menuActive === 0 ? "시간 최적화" : "최소 시간 기준"
                isActive.menuActive === 0 ? option.title : "최소 시간 기준"
              }
              buttonText="주정차 위치 반영"
              data={
                isActive.menuActive === 0
                  ? [
                      {
                        value: "000",
                        label: "평균 방문 건수",
                      },
                      {
                        hour: "00",
                        minute: "00",
                        label: "평균 예상 소요 시간",
                      },
                      {
                        value: "000",
                        label: "평균 운행 거리(km)",
                      },
                    ]
                  : [
                      {
                        hour: "00",
                        minute: "00",
                        label: "총 예상 소요 시간",
                      },
                      {
                        value: "000",
                        label: "총 운행 거리(km)",
                      },
                    ]
              }
            ></ListDataBox>
          }
          summaryBox={
            <ListSummaryBox
              data={[
                {
                  title: "투입 차량 수",
                  count: "0000",
                },
                {
                  title: "총 방문자 수",
                  count: "0000",
                },
              ]}
            />
          }
        >
          {testConst.map((el, idx) => (
            <ListItem
              key={idx}
              name={el.name}
              count={el.count}
              color={{ backgroundColor: randomColor[idx] }}
              descBox={
                <ListDescBox
                  desc={[
                    { label: el.time, value: el.timeValue },
                    { label: el.distance, value: el.distanceValue },
                  ]}
                ></ListDescBox>
              }
              expandBox={
                <ListExpandBox
                  colorIdx={idx}
                  key={idx}
                  expandData={[
                    {
                      areaTime: el.areaTime,
                      areaDistance: el.areaDistance,
                      area: el.area,
                      workingHours: el.workingHours,
                      travelTime: el.travelTime,
                      memo: el.memo,
                    },
                    {
                      areaTime: el.areaTime,
                      areaDistance: el.areaDistance,
                      area: el.area,
                      workingHours: el.workingHours,
                      travelTime: el.travelTime,
                      memo: el.memo,
                    },
                    {
                      areaTime: el.areaTime,
                      areaDistance: el.areaDistance,
                      area: el.area,
                      workingHours: el.workingHours,
                      travelTime: el.travelTime,
                      memo: el.memo,
                    },
                    {
                      areaTime: el.areaTime,
                      areaDistance: el.areaDistance,
                      area: el.area,
                      workingHours: el.workingHours,
                      travelTime: el.travelTime,
                      memo: el.memo,
                    },
                  ]}
                ></ListExpandBox>
              }
            ></ListItem>
          ))}
        </List>
      </div>
      <div className="panel_footer">
        <ButtonGroup
          button={[
            { text: "리스트 다운", className: "list_down_btn" },
            // 🐽 1차 라이트 버전 제거 [240423]
            // { text: "권역 확정", className: "area_expand_btn" },
          ]}
        />
      </div>
    </div>
  );
};
