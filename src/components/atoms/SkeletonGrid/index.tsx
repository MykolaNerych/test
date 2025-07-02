import sx from "./SkeletonGrid.module.scss";

import { cx } from "@/lib";

type Props = {
  isShowSkeleton?: boolean;
};

export const SkeletonGrid = ({ isShowSkeleton }: Props) => {
  if (!isShowSkeleton) return null;

  return (
    <div className={sx.skeletonGrid}>
      <div className={sx.skeletonCard}>
        <div className={sx.skeletonPoster}></div>
        <div className={sx.skeletonInfo}>
          <div className={cx(sx.skeletonLine, sx.title)}></div>
          <div className={cx(sx.skeletonLine, sx.year)}></div>
          <div className={cx(sx.skeletonLine, sx.overview)}></div>
          <div className={cx(sx.skeletonLine, sx.overview)}></div>
          <div className={cx(sx.skeletonLine, sx.overview)}></div>
        </div>
      </div>
    </div>
  );
};
