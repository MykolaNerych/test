import sx from "./ProgressBar.module.scss";

type Props = {
  isRequest: boolean;
};

export const ProgressBar = ({ isRequest }: Props) => {
  if (!isRequest) return null;

  return (
    <div className={sx.progressBar}>
      <div className={sx.progressBarFill}></div>
    </div>
  );
};
