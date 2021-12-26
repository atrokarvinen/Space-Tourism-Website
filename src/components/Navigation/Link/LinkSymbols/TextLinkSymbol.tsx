import style from "./LinkSymbolStyles.module.scss";

export interface TextLinkSymbolProps {
  label: string;
  isActive: boolean;
}

export function TextLinkSymbol({ label, isActive }: TextLinkSymbolProps) {
  const activeClassNameExt = isActive ? style.active : undefined;
  return (
    <div className={`${style.textSymbol} ${activeClassNameExt}`}>
      <span className={style.linkLabel}>{label}</span>
    </div>
  );
}
