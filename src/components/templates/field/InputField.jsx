export const InputField = ({
  children,
  placeholder,
  value,
  label,
  full,
  type,
  min,
  max,
  icon,
  onChange,
  className,
}) => {
  return (
    <>
      {type === "text" && (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          className={`${full ? "w-full" : className}`}
          onChange={onChange}
        />
      )}
      {type === "number" && (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          className={`${full ? "w-full" : className}`}
          onChange={onChange}
          min={min}
          max={max}
        />
      )}
      {type === "file" && (
        <input
          type="file"
          id="fileUpload"
          className={className}
          onChange={onChange}
          accept=".xlsx"
        />
      )}
      {label && <span>{label}</span>}
    </>
  );
};
