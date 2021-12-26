import style from "./Sidebar.module.scss";

import React, { ReactElement } from "react";
import Navigation from "../../Navigation/Navigation";
import NavigationOption from "../../Navigation/NavigationOption";

interface SidebarProps {
  onClose: () => void;
  navigationOptions: NavigationOption[];
}

export default function Sidebar({
  onClose,
  navigationOptions,
}: SidebarProps): ReactElement {
  // Add incovation of onClose to all link clicks to close sidebar whenever link is clicked.
  const mobileOptions = navigationOptions.map((option) => {
    return {
      ...option,
      onClick: () => {
        onClose();
        option.onClick();
      },
    };
  });

  return (
    <div className={style.sidebar}>
      <img
        src={`${process.env.PUBLIC_URL}/assets/shared/icon-close.svg`}
        alt="close logo"
        className={style.closeButton}
        onClick={onClose}
      />
      <div className={style.navigation}>
        <Navigation
          options={mobileOptions}
          displayIndex={true}
          linkSymbol="text"
          flowDirection="column"
        />
      </div>
    </div>
  );
}
