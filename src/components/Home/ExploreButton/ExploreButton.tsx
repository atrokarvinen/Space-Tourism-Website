import style from "./ExploreButton.module.scss";

import { useState } from "react";

interface ExploreButtonProps {
  onClick: () => void;
}

export function ExploreButton({ onClick }: ExploreButtonProps) {
  const [isExploreBackgroundVisible, setIsExploreBackgroundVisible] =
    useState(false);

  const hoveredStyle = isExploreBackgroundVisible
    ? style.blurElementHovered
    : undefined;

  return (
    <div className={style.exploreElement}>
      <div className={`${style.blurElement} ${hoveredStyle}`} />
      <button
        className={style.exploreButton}
        onMouseOver={() => setIsExploreBackgroundVisible(true)}
        onMouseLeave={() => setIsExploreBackgroundVisible(false)}
        onClick={onClick}
      >
        <h4>Explore</h4>
      </button>
    </div>
  );
}
