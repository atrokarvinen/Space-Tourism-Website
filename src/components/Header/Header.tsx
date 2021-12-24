import style from "./Header.module.scss";

import React, { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

import NavigationOption from "../Navigation/NavigationOption";
import Navigation from "../Navigation/Navigation";

interface NavigationProps {
  options: NavigationOption[];
}

export default function Header({ options }: NavigationProps): ReactElement {
  const navigate = useNavigate();

  return (
    <div className={style.header}>
      <div className={style.crossingLine} />
      <img
        className={style.starImage}
        src="/assets/shared/logo.svg"
        alt="star logo"
        onClick={() => navigate("/")}
      />
      {/* <div className={style.navigation}>
        <Navigation options={options} displayIndex={true} linkSymbol="text"/>
      </div> */}
      <img
        className={style.hamburger}
        src="/assets/shared/icon-hamburger.svg"
        alt="hamburger"
      />
    </div>
  );
}
