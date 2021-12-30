import style from "./Header.module.scss";

import React, { ReactElement, useState } from "react";
import { isMobile } from "react-device-detect";

import NavigationOption from "../Navigation/NavigationOption";
import Navigation from "../Navigation/Navigation";
import Sidebar from "./Sidebar/Sidebar";

interface NavigationProps {
  isSidebarVisible: boolean;
  setIsSidebarVisible: (isVisible: boolean) => void;

  navigationOptions: NavigationOption[];
  logoClick: () => void;
}

export default function Header({
  isSidebarVisible,
  setIsSidebarVisible,
  navigationOptions,
  logoClick,
}: NavigationProps): ReactElement {
  return (
    <div className={style.header}>
      <div className={style.crossingLine} />
      <img
        className={style.starImage}
        src={`${process.env.PUBLIC_URL}/assets/shared/logo.svg`}
        alt="star logo"
        onClick={logoClick}
      />
      {isMobile ? (
        <img
          className={style.hamburger}
          src={`${process.env.PUBLIC_URL}/assets/shared/icon-hamburger.svg`}
          alt="hamburger"
          onClick={() => setIsSidebarVisible(true)}
        />
      ) : (
        <div className={style.navigation}>
          <Navigation options={navigationOptions} linkSymbol="indexed-text" />
        </div>
      )}
    </div>
  );
}
