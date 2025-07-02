import sx from "./Select.module.scss";

export type SelectOption = {
  value: string;
  title: string;
};

type Props = {
  label: string;
  options: Array<SelectOption>;
  value?: string;
  onChange: (value: string) => void;
};

export const Select = ({ label, options, value, onChange }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={sx.filterField}>
      <label className={sx.filterLabel}>{label}</label>
      <select className={sx.filterSelect} value={value} onChange={handleChange}>
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
};
