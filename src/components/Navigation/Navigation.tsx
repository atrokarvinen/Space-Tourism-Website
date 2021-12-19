import style from "./Navigation.module.scss";

import React, { ReactElement } from "react";

import LinkItem from "./Link/Link";
import NavigationOption from "./NavigationOption";

interface NavigationProps {
  options: NavigationOption[];
}

export default function Navigation({ options }: NavigationProps): ReactElement {
  return (
    <div className={style.header}>
      <img className={style.starImage} src="star" alt="star logo" />
      <nav className={style.navigation}>
        <ul>
          {options.map((link, index) => {
            return <LinkItem key={link.label} link={link} index={index} />;
          })}
        </ul>
      </nav>
    </div>
  );
}
