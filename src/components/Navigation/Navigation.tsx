import style from "./Navigation.module.scss";

import React, { ReactElement } from "react";

import LinkItem from "./Link/Link";
import NavigationOption from "./NavigationOption";

interface NavigationProps {
  options: NavigationOption[];
  displayIndex?: boolean;
}

export default function Navigation({
  options,
  displayIndex,
}: NavigationProps): ReactElement {
  return (
    <nav className={style.navigation}>
      <ul>
        {options.map((link, index) => {
          return (
            <LinkItem
              key={link.label}
              link={link}
              index={displayIndex ? index : undefined}
            />
          );
        })}
      </ul>
    </nav>
  );
}
