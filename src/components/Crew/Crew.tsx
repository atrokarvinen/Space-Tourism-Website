import style from "./Crew.module.scss";

import React, { ReactElement } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import NavigationOption from "../Navigation/NavigationOption";
import {
  convertToValidRoute,
  getCurrentItem,
  toNavigationOptions,
} from "../../services/RouteHelper";
import { CrewMemberType } from "../../models/CrewMemberType";
import CrewContent from "./CrewContent";

interface CrewProps {
  crewMembers: CrewMemberType[];
}

export default function Crew({ crewMembers }: CrewProps): ReactElement {
  const location = useLocation();
  const currentCrewMember: CrewMemberType = getCurrentItem(
    crewMembers,
    location.pathname
  );

  const { images } = currentCrewMember;
  const publicImagePath = images.png.replace(".", process.env.PUBLIC_URL);

  const navOptions: NavigationOption[] = toNavigationOptions(crewMembers);

  return (
    <div className={style.crew}>
      <h4 className={style.caption}>02 MEET YOUR CREW</h4>
      <img
        className={style.crewImage}
        src={publicImagePath}
        alt="crew member"
      />
      <div className={style.crewMembers}>
        <Routes>
          {crewMembers.map((crewMember: CrewMemberType) => {
            return (
              <Route
                key={crewMember.name}
                path={convertToValidRoute(crewMember.name)}
                element={<CrewContent crewMember={crewMember} />}
              ></Route>
            );
          })}
          <Route
            path="*"
            element={<CrewContent crewMember={currentCrewMember} />}
          />
        </Routes>
        <div className={style.navigation}>
          <Navigation options={navOptions} linkSymbol="slider" />
        </div>
      </div>
    </div>
  );
}
