// common
import { useState } from "react";

// style
import "styles/components/_dragdrop.scss";

// icon
import { PiFilePlusLight } from "react-icons/pi";

// components
import { Label } from "components/atoms/label/Label";

export const DragDrop = () => {
  const [isDrag, setIsDrag] = useState(false);

  return (
    <div className="drag_drop_box">
      <Label className="file_desc" beforeIcon={<PiFilePlusLight />}>
        드래그 앤 드롭으로 파일 업로드가 가능합니다.
      </Label>
      <Label
        htmlFor="fileUpload"
        className={isDrag ? "dragging drag_drop_file" : "drag_drop_file"}
      >
        파일 선택
      </Label>
    </div>
  );
};
