// styles
import "styles/layouts/_list.scss";

export const List = ({ children, summaryBox, dataBox }) => {
  return (
    <div className="list_box">
      {dataBox}
      {summaryBox}
      <div className="list_scroll_container">
        <div className="list_group">{children}</div>
      </div>
    </div>
  );
};
