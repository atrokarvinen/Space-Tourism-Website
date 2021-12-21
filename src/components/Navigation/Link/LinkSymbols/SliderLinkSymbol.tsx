import style from "../../Navigation.module.scss";

import * as React from "react";

export interface SliderLinkSymbolProps {
  isActive: boolean;
}

export function SliderLinkSymbol({ isActive }: SliderLinkSymbolProps) {
  const activeClassNameExt = isActive ? style.active : undefined;
  return <div className={`${style.sliderSymbol} ${activeClassNameExt}`}></div>;
}
