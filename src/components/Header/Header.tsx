import style from "./Header.module.scss";

import React, { ReactElement } from "react";
import NavigationOption from "../Navigation/NavigationOption";
import Navigation from "../Navigation/Navigation";

interface NavigationProps {
  options: NavigationOption[];
}

export default function Header({ options }: NavigationProps): ReactElement {
  return (
    <div className={style.header}>
      <img
        className={style.starImage}
        src="./assets/shared/logo.svg"
        alt="star logo"
      />
      <div className={style.navigation}>
        <Navigation options={options} displayIndex={true}/>
      </div>
    </div>
  );
}
