import style from "./Technology.module.scss";

import React, { ReactElement } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { isMobile } from "react-device-detect";

import Navigation from "../Navigation/Navigation";
import NavigationOption from "../Navigation/NavigationOption";
import {
  convertToValidRoute,
  getCurrentItem,
  toNavigationOptions,
} from "../../services/RouteHelper";
import { TechnologyType } from "../../models/TechnologyType";
import TechnologyContent from "./TechnologyContent";

interface TechnologyProps {
  technologies: TechnologyType[];
}

export default function Technology({
  technologies,
}: TechnologyProps): ReactElement {
  const location = useLocation();
  const currentTech: TechnologyType = getCurrentItem(
    technologies,
    location.pathname
  );

  const { images } = currentTech;
  const imageUrl = isMobile ? images.landscape : images.portrait;
  const publicImagePath = imageUrl.replace(".", process.env.PUBLIC_URL);

  const navOptions: NavigationOption[] = toNavigationOptions(technologies);
  return (
    <div className={style.technology}>
      <h4 className={style.caption}>03 SPACE LAUNCH 101</h4>
      <img
        className={style.technologyImage}
        src={publicImagePath}
        alt="technology"
      />
      <div className={style.technologies}>
        <div className={style.navigation}>
          <Navigation
            options={navOptions}
            linkSymbol="numberedCircle"
            flowDirection="column"
          />
        </div>
        <div className={style.content}>
          <Routes>
            {technologies.map((technology: TechnologyType) => {
              return (
                <Route
                  key={technology.name}
                  path={convertToValidRoute(technology.name)}
                  element={<TechnologyContent technology={technology} />}
                />
              );
            })}
            <Route
              path="*"
              element={<TechnologyContent technology={currentTech} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}
