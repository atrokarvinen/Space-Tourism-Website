import style from "../../Navigation.module.scss";

export interface NumberedCircleLinkSymbolProps {
  isActive: boolean;
  index: number;
}

export function NumberedCircleLinkSymbol({
  isActive,
  index,
}: NumberedCircleLinkSymbolProps) {
  const activeClassNameExt = isActive ? style.active : undefined;
  return (
    <div className={`${style.numberedCircleSymbol} ${activeClassNameExt}`}>
      {index + 1}
    </div>
  );
}
