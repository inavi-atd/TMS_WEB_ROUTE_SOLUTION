import { Button } from "./Button";

export const ButtonGroup = ({ button }) => {
  return (
    <div className="btn_group">
      {button.map(({ icon, className, text }, idx) => (
        <Button key={idx} icon={icon} className={className}>
          {text}
        </Button>
      ))}
    </div>
  );
};
