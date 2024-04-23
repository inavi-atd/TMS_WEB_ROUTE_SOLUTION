// common
import { useState } from "react";

// icon
import { VscClose } from "react-icons/vsc";
import { PiPaperclip } from "react-icons/pi";

// style
import "styles/components/_card.scss";

// components
import { Button } from "components/atoms/button/Button";
import { Label } from "components/atoms/label/Label";
import { Chip } from "components/templates/chip/Chip";
import { DragDrop } from "components/templates/form/DragDrop";
import { InputField } from "components/templates/field/InputField";

export const EnterDataCard = () => {
  const [uploadFileValue, setUploadFileValue] = useState("");
  return (
    <div className="card_box">
      <div className="card_header">
        <Label className="essential">데이터 입력</Label>
        <Button className="template_download_btn">템플릿 다운</Button>
      </div>
      <div className="card_container">
        <DragDrop />
        <Chip
          className={`${uploadFileValue === "" && "none_file"}`}
          beforeIcon={<PiPaperclip />}
          afterIcon={<VscClose />}
        >
          {uploadFileValue !== "" ? (
            <InputField type="file" id="fileUpload" className="file_name" />
          ) : (
            <InputField
              type="file"
              id="fileUpload"
              className="file_name"
              onChange={(e) => {
                console.log(e.target.files);
                setUploadFileValue(e.target.files);
              }}
            />
          )}
        </Chip>
      </div>
    </div>
  );
};
