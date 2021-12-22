import style from "./ExploreButton.module.scss";

import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ExploreButtonProps {
  navigationLink: string;
}

export function ExploreButton({ navigationLink }: ExploreButtonProps) {
  const navigate = useNavigate();

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
        onClick={() => navigate(navigationLink)}
      >
        <h4>Explore</h4>
      </button>
    </div>
  );
}
