import style from "./Destination.module.scss";

import React, { ReactElement, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import { DestinationType } from "../../models/DestinationType";
import Navigation from "../Navigation/Navigation";
import NavigationOption from "../Navigation/NavigationOption";
import { getLastLink } from "../../services/RouteHelper";

interface DestinationProps {
  destinations: DestinationType[];
}

export default function Destination({
  destinations,
}: DestinationProps): ReactElement {
  const [refresh, setRefresh] = useState(false);

  const defaultDestination = destinations[0];
  const defaultName = defaultDestination.name.toLowerCase();

  const selectedDestinationName = getLastLink(useLocation().pathname);
  const selectedDestination = destinations.find(
    (destination) => destination.name.toLowerCase() === selectedDestinationName
  );

  const currentDestination = selectedDestination ?? defaultDestination;
  const { images } = currentDestination;

  const navOptions: NavigationOption[] = destinations.map((destination) => {
    return {
      label: destination.name.toUpperCase(),
      linkPath: `${destination.name.toLowerCase()}`,
    };
  });

  // console.log(`destination pathname: ${pathname}`);
  const trimmedImagePath = images.png.replace(".", "");

  return (
    <div className={style.destination}>
      <h4
        className={style.caption}
        onClick={() => {
          setRefresh(!refresh);
        }}
      >
        01 PICK YOUR DESTINATION
      </h4>
      <img
        className={style.destinationImage}
        src={trimmedImagePath}
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
