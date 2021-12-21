import style from "./Navigation.module.scss";

import React, { ReactElement } from "react";

import LinkItem from "./Link/Link";
import NavigationOption from "./NavigationOption";
import { TextLinkSymbol } from "./Link/LinkSymbols/TextLinkSymbol";
import { SliderLinkSymbol } from "./Link/LinkSymbols/SliderLinkSymbol";
import { NumberedCircleLinkSymbol } from "./Link/LinkSymbols/NumberedCircleLinkSymbol";
import { useLocation } from "react-router-dom";

declare type LinkSymbolType = "text" | "slider" | "numberedCircle";

interface NavigationProps {
  options: NavigationOption[];
  displayIndex?: boolean;
  linkSymbol: LinkSymbolType;
  flowDirection?: "row" | "column";
}

export default function Navigation({
  options,
  displayIndex,
  linkSymbol,
  flowDirection,
}: NavigationProps): ReactElement {
  const location = useLocation();
  const { pathname } = location;

  const isLinkActive = (path: string): boolean => {
    const isHomePage = path === "/";
    const exactlyMatches = path === pathname;
    const isActive =
      (isHomePage && exactlyMatches) ||
      (!isHomePage && pathname.includes(path));
    return isActive;
  };

  const displayLinkSymbol = (link: NavigationOption, index: number) => {
    const isActive = isLinkActive(link.linkPath);
    switch (linkSymbol) {
      case "slider":
        return <SliderLinkSymbol isActive={isActive} />;
      case "numberedCircle":
        return <NumberedCircleLinkSymbol isActive={isActive} index={index} />;
      case "text":
      default:
        return (
          <TextLinkSymbol
            isActive={isActive}
            index={displayIndex ? index : undefined}
            label={link.label}
          />
        );
    }
  };

  const listFlowDirection = flowDirection ?? "row";

  return (
    <nav className={style.navigation}>
      <ul style={{flexDirection: listFlowDirection}}>
        {options.map((link, index) => {
          return (
            <LinkItem key={link.label} link={link}>
              {displayLinkSymbol(link, index)}
            </LinkItem>
          );
        })}
      </ul>
    </nav>
  );
}
