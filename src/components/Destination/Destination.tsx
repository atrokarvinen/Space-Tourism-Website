import style from "./Destination.module.scss";

import React, { ReactElement } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { DestinationType } from "../../models/DestinationType";
import Navigation from "../Navigation/Navigation";
import NavigationOption from "../Navigation/NavigationOption";

interface DestinationProps {
  destinations: DestinationType[];
}

export default function Destination({
  destinations,
}: DestinationProps): ReactElement {
  const defaultDestination = destinations[0];
  const defaultName = defaultDestination.name.toLowerCase();
  const { images } = defaultDestination;

  const navOptions: NavigationOption[] = destinations.map((destination) => {
    return {
      label: destination.name.toUpperCase(),
      linkPath: `${destination.name.toLowerCase()}`,
    };
  });

  // console.log(`destination pathname: ${pathname}`);

  return (
    <div className={style.destination}>
      <h4 className={style.caption}>01 PICK YOUR DESTINATION</h4>
      <img
        className={style.destinationImage}
        src={images.png}
        alt="destination planet"
      />
      <div className={style.destinations}>
        <Navigation options={navOptions} />
        <Routes>
          {destinations.map((destination) => {
            const { name, description, distance, travel } = destination;
            return (
              <Route
                key={destination.name}
                path={`${destination.name.toLowerCase()}`}
                element={
                  <>
                    <h2>{name.toUpperCase()}</h2>
                    <p>{description}</p>
                    <div className={style.separationLine} />

                    <div className={style.destinationStatistics}>
                      <span className={style.subHeading2}>AVG. DISTANCE</span>
                      <span className={style.subHeading2}>
                        EST. TRAVEL TIME
                      </span>
                      <span className={style.subHeading1}>
                        {distance.toUpperCase()}
                      </span>
                      <span className={style.subHeading1}>
                        {travel.toUpperCase()}
                      </span>
                    </div>
                  </>
                }
              ></Route>
            );
          })}
          <Route path="*" element={<Navigate to={`${defaultName}`} />} />
        </Routes>
      </div>
    </div>
  );
}
