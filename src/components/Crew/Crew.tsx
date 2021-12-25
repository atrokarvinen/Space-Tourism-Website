import style from "./Crew.module.scss";

import React, { ReactElement, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import NavigationOption from "../Navigation/NavigationOption";
import { convertToValidRoute } from "../../services/RouteHelper";
import { CrewMemberType } from "../../models/CrewMemberType";

interface CrewProps {
  crewMembers: CrewMemberType[];
}

export default function Crew({ crewMembers }: CrewProps): ReactElement {
  const [selectedCrewMember, setSelectedCrewMember] = useState<
    CrewMemberType | undefined
  >();
  const defaultCrewMember = crewMembers[0];
  const defaultName = convertToValidRoute(defaultCrewMember.name);

  const currentDestination = selectedCrewMember ?? defaultCrewMember;
  const { images } = currentDestination;

  const navOptions: NavigationOption[] = crewMembers.map((crewMember) => {
    const validRoute = convertToValidRoute(crewMember.name);
    return {
      label: crewMember.name.toUpperCase(),
      linkPath: validRoute,
      onClick: () => setSelectedCrewMember(crewMember),
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
