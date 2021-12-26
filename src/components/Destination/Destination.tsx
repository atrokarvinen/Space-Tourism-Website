import style from "./Destination.module.scss";

import React, { ReactElement, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { DestinationType } from "../../models/DestinationType";
import Navigation from "../Navigation/Navigation";
import NavigationOption from "../Navigation/NavigationOption";
import { convertToValidRoute } from "../../services/RouteHelper";

interface DestinationProps {
  destinations: DestinationType[];
}

export default function Destination({
  destinations,
}: DestinationProps): ReactElement {
  const [selectedDestination, setselectedDestination] = useState<
    DestinationType | undefined
  >();

  const defaultDestination = destinations[0];
  const defaultName = defaultDestination.name.toLowerCase();

  const currentDestination = selectedDestination ?? defaultDestination;
  const { images } = currentDestination;

  const navOptions: NavigationOption[] = destinations.map((destination) => {
    const validLinkName = convertToValidRoute(destination.name);
    return {
      label: destination.name.toUpperCase(),
      linkPath: validLinkName,
      onClick: () => setselectedDestination(destination),
    };
  });

  const publicImagePath = images.png.replace(".", process.env.PUBLIC_URL);

  return (
    <div className={style.destination}>
      <h4 className={style.caption}>01 PICK YOUR DESTINATION</h4>
      <img
        className={style.destinationImage}
        src={publicImagePath}
        alt="destination planet"
      />
      <div className={style.destinations}>
        <div className={style.navigation}>
          <Navigation options={navOptions} linkSymbol="text" />
        </div>
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
