import style from "./Header.module.scss";

import React, { ReactElement, useState } from "react";
import { isMobile } from "react-device-detect";

import NavigationOption from "../Navigation/NavigationOption";
import Navigation from "../Navigation/Navigation";
import Sidebar from "./Sidebar/Sidebar";

interface NavigationProps {
  navigationOptions: NavigationOption[];
  logoClick: () => void;
}

export default function Header({
  navigationOptions,
  logoClick,
}: NavigationProps): ReactElement {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  console.log("header update");

  return (
    <div className={style.header}>
      {isSidebarVisible ? (
        <Sidebar
          onClose={() => setIsSidebarVisible(false)}
          navigationOptions={navigationOptions}
        />
      ) : null}
      <div className={style.crossingLine} />
      <img
        className={style.starImage}
        src="/assets/shared/logo.svg"
        alt="star logo"
        onClick={logoClick}
      />
      {isMobile ? (
        <img
          className={style.hamburger}
          src="/assets/shared/icon-hamburger.svg"
          alt="hamburger"
          onClick={() => setIsSidebarVisible(true)}
        />
      ) : (
        <div className={style.navigation}>
          <Navigation
            options={navigationOptions}
            displayIndex={true}
            linkSymbol="text"
          />
        </div>
      )}
    </div>
  );
}
