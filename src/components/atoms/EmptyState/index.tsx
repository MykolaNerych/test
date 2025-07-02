import sx from "./EmptyState.module.scss";

type Props = {
  isShowEmptyState: boolean;
};

export const EmptyState = ({ isShowEmptyState }: Props) => {
  if (!isShowEmptyState) return null;

  return (
    <div className={sx.emptyState}>
      <h3>No movies found</h3>
      <p>Try searching with different keywords or check your spelling.</p>
    </div>
  );
};
