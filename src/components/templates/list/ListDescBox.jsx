export const ListDescBox = ({ desc }) => {
  return (
    <div className="desc_box">
      {desc.map(({ label, value }, idx) => (
        <div className="box_area" key={idx}>
          <div className="desc_title">{label}</div>
          <span className="desc_count">{value}</span>
        </div>
      ))}
    </div>
  );
};
