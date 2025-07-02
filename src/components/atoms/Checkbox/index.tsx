import sx from "./Checkbox.module.scss";

type Props = {
  title: string;
  label: string;
  checked?: boolean;
  onChange: (value: boolean) => void;
};

export const Checkbox = ({ title, label, checked, onChange }: Props) => {
  return (
    <div className={sx.filterField}>
      <label className={sx.filterLabel}>{title}</label>
      <div className={sx.checkboxField}>
        <input
          checked={checked}
          type="checkbox"
          id="includeAdult"
          onChange={(e) => onChange(e.target.checked)}
        />
        <label htmlFor="includeAdult">{label}</label>
      </div>
    </div>
  );
};
