import style from "./Technology.module.scss";

import React, { ReactElement, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import NavigationOption from "../Navigation/NavigationOption";
import { convertToValidRoute } from "../../services/RouteHelper";
import { TechnologyType } from "../../models/TechnologyType";
import { isMobile } from "react-device-detect";

interface TechnologyProps {
  technologies: TechnologyType[];
}

export default function Technology({
  technologies,
}: TechnologyProps): ReactElement {
  const [selectedTech, setSelectedTech] = useState<
    TechnologyType | undefined
  >();

  const defaultTechnology = technologies[0];
  const defaultName = convertToValidRoute(defaultTechnology.name);

  const currentDestination = selectedTech ?? defaultTechnology;
  const { images } = currentDestination;

  const navOptions: NavigationOption[] = technologies.map((tech) => {
    const validRoute = convertToValidRoute(tech.name);
    return {
      label: tech.name.toUpperCase(),
      linkPath: validRoute,
      onClick: () => setSelectedTech(tech),
    };
  });

  const imageUrl = isMobile ? images.landscape : images.portrait;
  const trimmedImagePath = imageUrl.replace(".", "");

  return (
    <div className={style.technology}>
      <h4 className={style.caption}>03 SPACE LAUNCH 101</h4>
      <img
        className={style.technologyImage}
        src={trimmedImagePath}
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
            {technologies.map((crewMember: TechnologyType) => {
              const { name, description } = crewMember;
              return (
                <Route
                  key={crewMember.name}
                  path={`${convertToValidRoute(crewMember.name)}`}
                  element={
                    <>
                      <span className={style.subHeading2}>
                        THE TERMINOLOGY...
                      </span>
                      <h3>{name.toUpperCase()}</h3>
                      <p>{description}</p>
                    </>
                  }
                ></Route>
              );
            })}
            <Route path="*" element={<Navigate to={`${defaultName}`} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
