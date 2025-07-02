import sx from "./Input.module.scss";

type Props = {
  label?: string;
  placeholder: string;
  min: string;
  max: string;
  type: string;
  defaultValue?: string;
  onChange: (value: string) => void;
};

export const Input = ({
  label,
  placeholder,
  min,
  max,
  type,
  defaultValue,
  onChange,
}: Props) => {
  return (
    <div className={sx.filterField}>
      <label className={sx.filterLabel}>{label}</label>
      <input
        type={type}
        className={sx.filterInput}
        placeholder={placeholder}
        min={min}
        max={max}
        defaultValue={defaultValue}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
