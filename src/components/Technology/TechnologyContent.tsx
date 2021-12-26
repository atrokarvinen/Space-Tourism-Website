import style from "./Technology.module.scss";

import React, { ReactElement } from "react";

import { TechnologyType } from "../../models/TechnologyType";

interface TechnologyContentProps {
  technology: TechnologyType;
}

export default function TechnologyContent({
  technology,
}: TechnologyContentProps): ReactElement {
  const { name, description } = technology;

  return (
    <>
      <span className={style.subHeading2}>THE TERMINOLOGY...</span>
      <h3>{name.toUpperCase()}</h3>
      <p>{description}</p>
    </>
  );
}
