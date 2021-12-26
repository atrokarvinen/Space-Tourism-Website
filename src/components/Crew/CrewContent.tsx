import style from "./Crew.module.scss";

import React, { ReactElement } from "react";

import { CrewMemberType } from "../../models/CrewMemberType";

interface CrewContentProps {
  crewMember: CrewMemberType;
}

export default function CrewContent({
  crewMember,
}: CrewContentProps): ReactElement {
  const { name, role, bio } = crewMember;
  return (
    <>
      <h4 className={style.role}>{role.toUpperCase()}</h4>
      <h3 className={style.name}>{name.toUpperCase()}</h3>
      <p>{bio}</p>
    </>
  );
}
