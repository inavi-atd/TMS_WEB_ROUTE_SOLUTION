export const ListSummaryBox = ({ data }) => {
  return (
    <div className="summary_box">
      {data.map(({ title, count }, idx) => (
        <div className="box_area" key={idx}>
          <div className="summary_title">{title}</div>
          <strong className="summary_count">{count}</strong>
        </div>
      ))}
    </div>
  );
};
