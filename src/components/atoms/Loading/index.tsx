import sx from "./Loading.module.scss";

type Props = {
  isLoading: boolean;
};

export const Loading = ({ isLoading }: Props) => {
  if (!isLoading) return null;

  return (
    <div className={sx.loading}>
      <div className={sx.loadingSpinner}></div>
      <p>Searching for movies...</p>
    </div>
  );
};
