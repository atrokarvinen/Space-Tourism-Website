import style from "./Destination.module.scss";

import React, { ReactElement } from "react";

import { DestinationType } from "../../models/DestinationType";

interface DestinationContentProps {
  destination: DestinationType;
}

export default function DestinationContent({
  destination,
}: DestinationContentProps): ReactElement {
  const { name, description, distance, travel } = destination;

  return (
    <>
      <h2>{name.toUpperCase()}</h2>
      <p>{description}</p>
      <div className={style.separationLine} />

      <div className={style.destinationStatistics}>
        <span className={style.subHeading2}>AVG. DISTANCE</span>
        <span className={style.subHeading2}>EST. TRAVEL TIME</span>
        <span className={style.subHeading1}>{distance.toUpperCase()}</span>
        <span className={style.subHeading1}>{travel.toUpperCase()}</span>
      </div>
    </>
  );
}
