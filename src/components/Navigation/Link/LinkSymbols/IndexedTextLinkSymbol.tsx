import style from "./LinkSymbolStyles.module.scss";

export interface IndexedTextLinkSymbolProps {
  label: string;
  index: number;
  isActive: boolean;
}

export function IndexedTextLinkSymbol({
  label,
  index,
  isActive,
}: IndexedTextLinkSymbolProps) {
  const activeClassNameExt = isActive ? style.active : undefined;

  const applyZeroPadding = (number: number): string => {
    if (number < 10) {
      return `0${number}`;
    }
    return number.toString();
  };

  return (
    <div className={`${style.textSymbol} ${activeClassNameExt}`}>
      <span className={style.linkNumber}>{applyZeroPadding(index)}</span>
      <span className={style.linkLabel}>{label}</span>
    </div>
  );
}
