import style from "./Sidebar.module.scss";

import React, { ReactElement } from "react";
import Navigation from "../../Navigation/Navigation";
import NavigationOption from "../../Navigation/NavigationOption";
import { isMobile } from "react-device-detect";

interface SidebarProps {
  isVisible: boolean;
  onClose: () => void;
  navigationOptions: NavigationOption[];
}

export default function Sidebar({
  isVisible,
  onClose,
  navigationOptions,
}: SidebarProps): ReactElement | null {
  if (!isMobile) {
    return null;
  }

  // Add incovation of onClose to all link clicks to close sidebar whenever link is clicked.
  const mobileOptions = navigationOptions.map((option) => {
    return {
      ...option,
      onClick: () => {
        onClose();
        if (option.onClick) {
          option.onClick();
        }
      },
    };
  });

  const visibilityStyle = isVisible ? style.visible : undefined;

  return (
    <div className={`${style.sidebar} ${visibilityStyle}`}>
      <img
        src={`${process.env.PUBLIC_URL}/assets/shared/icon-close.svg`}
        alt="close logo"
        className={style.closeButton}
        onClick={onClose}
      />
      <div className={style.navigation}>
        <Navigation
          options={mobileOptions}
          linkSymbol="indexed-text"
          flowDirection="column"
        />
      </div>
    </div>
  );
}
