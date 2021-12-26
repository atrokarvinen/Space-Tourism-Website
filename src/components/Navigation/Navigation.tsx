import style from "./Navigation.module.scss";

import React, { ReactElement } from "react";

import LinkItem from "./Link/Link";
import NavigationOption from "./NavigationOption";
import { TextLinkSymbol } from "./Link/LinkSymbols/TextLinkSymbol";
import { IndexedTextLinkSymbol } from "./Link/LinkSymbols/IndexedTextLinkSymbol";
import { SliderLinkSymbol } from "./Link/LinkSymbols/SliderLinkSymbol";
import { NumberedCircleLinkSymbol } from "./Link/LinkSymbols/NumberedCircleLinkSymbol";
import { useLocation } from "react-router-dom";

declare type LinkSymbolType =
  | "text"
  | "indexed-text"
  | "slider"
  | "numberedCircle";

interface NavigationProps {
  options: NavigationOption[];
  linkSymbol: LinkSymbolType;
  flowDirection?: "row" | "column";
}

export default function Navigation({
  options,
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

  const findIndex = options.findIndex((link: NavigationOption) => {
    const isActive = isLinkActive(link.linkPath);
    return isActive;
  });
  const activeLinkIndex = findIndex === -1 ? 0 : findIndex;

  const displayLinkSymbol = (link: NavigationOption, index: number) => {
    const isActive = index === activeLinkIndex;
    switch (linkSymbol) {
      case "slider":
        return <SliderLinkSymbol isActive={isActive} />;
      case "numberedCircle":
        return <NumberedCircleLinkSymbol isActive={isActive} index={index} />;
      case "indexed-text":
        return (
          <IndexedTextLinkSymbol
            isActive={isActive}
            index={index}
            label={link.label}
          />
        );
      case "text":
      default:
        return <TextLinkSymbol isActive={isActive} label={link.label} />;
    }
  };

  const listFlowDirection = flowDirection ?? "row";

  return (
    <nav className={style.navigation}>
      <ul style={{ flexDirection: listFlowDirection }}>
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
