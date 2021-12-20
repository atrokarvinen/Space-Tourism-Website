import style from "../Navigation.module.scss";

import React, { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";

import NavigationOption from "../NavigationOption";

interface LinkItemProps {
  link: NavigationOption;
  index?: number;
}

export default function LinkItem({ link, index }: LinkItemProps): ReactElement {
  const location = useLocation();
  const { pathname } = location;

  console.log(pathname)

  const isHomePage = link.linkPath === "/";
  const exactlyMatches = link.linkPath === pathname;
  const isActive =
    (isHomePage && exactlyMatches) ||
    (!isHomePage && pathname.includes(link.linkPath));
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
    <li className={activeClassNameExt}>
      <Link to={link.linkPath}>
        {displayLinkNumber()}
        <span className={style.linkLabel}>{link.label}</span>
      </Link>
    </li>
  );
}
