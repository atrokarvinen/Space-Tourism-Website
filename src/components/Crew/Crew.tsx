import style from "./Crew.module.scss";

import React, { ReactElement } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import NavigationOption from "../Navigation/NavigationOption";
import { convertToValidRoute, getLastLink } from "../../services/RouteHelper";
import { CrewMemberType } from "../../models/CrewMemberType";

interface CrewProps {
  crewMembers: CrewMemberType[];
}

export default function Crew({ crewMembers }: CrewProps): ReactElement {
  const defaultCrewMember = crewMembers[0];
  const defaultName = convertToValidRoute(defaultCrewMember.name);

  const selectedCrewMemberName = getLastLink(useLocation().pathname);
  const selectedCrewMember = crewMembers.find(
    (crewMember) =>
      convertToValidRoute(crewMember.name) === selectedCrewMemberName
  );

  const currentDestination = selectedCrewMember ?? defaultCrewMember;
  const { images } = currentDestination;

  const navOptions: NavigationOption[] = crewMembers.map((crewMember) => {
    return {
      label: crewMember.name.toUpperCase(),
      linkPath: `${convertToValidRoute(crewMember.name)}`,
    };
  });

  const trimmedImagePath = images.png.replace(".", "");

  return (
    <div className={style.crew}>
      <h4 className={style.caption}>02 MEET YOUR CREW</h4>
      <img
        className={style.crewImage}
        src={trimmedImagePath}
        alt="crew member"
      />
      <div className={style.crewMembers}>
        <Routes>
          {crewMembers.map((crewMember: CrewMemberType) => {
            const { name, role, bio } = crewMember;
            return (
              <Route
                key={crewMember.name}
                path={`${convertToValidRoute(crewMember.name)}`}
                element={
                  <>
                    <h4 className={style.role}>{role.toUpperCase()}</h4>
                    <h3 className={style.name}>{name.toUpperCase()}</h3>
                    <p>{bio}</p>
                  </>
                }
              ></Route>
            );
          })}
          <Route path="*" element={<Navigate to={`${defaultName}`} />} />
        </Routes>
        <div className={style.navigation}>
          <Navigation options={navOptions} linkSymbol="slider" />
        </div>
      </div>
    </div>
  );
}
