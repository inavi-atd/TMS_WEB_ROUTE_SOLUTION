// components
import { Button } from "components/atoms/button/Button";
import { Label } from "components/atoms/label/Label";

export const Form = ({ type, children, text }) => {
  return (
    <div className="card_form">
      <Label>{children}</Label>
      {type === "button" && <Button />}
      {type === "time" && (
        <>
          <input type="time"></input> {text && <span>{text}</span>}
        </>
      )}
      {type === "date" && (
        <>
          <input type="date"></input> {text && <span>{text}</span>}
        </>
      )}
    </div>
  );
};
