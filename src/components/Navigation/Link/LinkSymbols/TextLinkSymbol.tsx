import style from "../../Navigation.module.scss";

import * as React from "react";

export interface TextLinkSymbolProps {
  label: string;
  index?: number;
  isActive: boolean;
}

export function TextLinkSymbol({
  label,
  index,
  isActive,
}: TextLinkSymbolProps) {
  const activeClassNameExt = isActive ? style.active : undefined;

  const applyZeroPadding = (number: number): string => {
    if (number < 10) {
      return `0${number}`;
    }
    return number.toString();
  };

  const displayLinkNumber = (): JSX.Element | null => {
    if (index !== undefined) {
      return (
        <span className={style.linkNumber}>{applyZeroPadding(index)}</span>
      );
    }

    return null;
  };

  return (
    <div className={`${style.textSymbol} ${activeClassNameExt}`}>
      {displayLinkNumber()}
      <span className={style.linkLabel}>{label}</span>
    </div>
  );
}
