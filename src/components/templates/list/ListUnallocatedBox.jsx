import { Button } from "components/atoms/button/Button";
import { InputField } from "../field/InputField";

export const ListUnallocatedBox = ({ data }) => {
  return (
    <div className="unallocated_box">
      {data.map(({ item }, idx) => (
        <div className="unallocated_box_area" key={idx}>
          <InputField type="text"></InputField>
        </div>
      ))}
      {/* 🐽 1차 라이트 버전 제거 [240423] */}
      {/* <div className="box_control_area">
        <InputField type="number" min="1" />
        <Button className="control_btn">권역 재할당</Button>
      </div> */}
    </div>
  );
};
