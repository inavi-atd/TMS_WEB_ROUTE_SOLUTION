import DatePicker, { registerLocale } from "react-datepicker";
import { Controller, useForm } from "react-hook-form";
import ko from "date-fns/locale/ko";

import "react-datepicker/dist/react-datepicker.css";
import "styles/components/_datepicker.scss";
import { Label } from "components/atoms/label/Label";

export const DatePickerField = ({ text }) => {
  const { control } = useForm();

  registerLocale("ko", ko);

  return (
    <div className="date_picker_wrap">
      <Label>{text}</Label>
      <Controller
        control={control}
        name="date-input"
        render={({ field: { onChange, value } }) => (
          <DatePicker
            dateFormat="yyyy-MM-dd hh:mm"
            dateFormatCalendar="yyyy년 MM월"
            locale="ko"
            showPopperArrow={false}
            // showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={60}
            timeCaption="시작시간"
            placeholderText="0000-00-00 00:00"
            selected={value}
            onChange={(data: any) => onChange(data)}
          />
        )}
      />
    </div>
  );
};
