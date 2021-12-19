import style from "../Navigation.module.scss";

import React, { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";

import NavigationOption from "../NavigationOption";

interface LinkItemProps {
  link: NavigationOption;
  index: number;
}

export default function LinkItem({ link, index }: LinkItemProps): ReactElement {
  const location = useLocation();
  const { pathname } = location;

  const isActive = pathname === link.linkPath;
  const activeClassNameExt = isActive ? style.active : undefined;
  return (
    <li className={activeClassNameExt}>
      <Link to={link.linkPath}>
        <span className={style.linkNumber}>0{index}</span>
        <span className={style.linkLabel}>{link.label}</span>
      </Link>
    </li>
  );
}
