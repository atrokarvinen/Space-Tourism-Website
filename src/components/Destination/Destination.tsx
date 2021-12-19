import style from "./Destination.module.scss";

import React, { ReactElement } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { DestinationType } from "../../models/DestinationType";
import Navigation from "../Navigation/Navigation";
import NavigationOption from "../Navigation/NavigationOption";

interface DestinationProps {
  destinations: DestinationType[];
}

export default function Destination({
  destinations,
}: DestinationProps): ReactElement {
  const location = useLocation();
  const { pathname } = location;

  const selectedDestination = destinations[0];
  const { images } = selectedDestination;

  const navOptions: NavigationOption[] = destinations.map((destination) => {
    return {
      label: destination.name.toUpperCase(),
      linkPath: `/destination/${destination.name}`,
    };
  });

  console.log(`destination pathname: ${pathname}`);

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
          <Route path="/destination/Moon" element={<div>Moon</div>} />
          <Route path="/destination/Mars" element={<div>Mars</div>} />
          <Route path="/destination/Europa" element={<div>Europa</div>} />
          <Route path="/destination/Titan" element={<div>Titan</div>} />
          {/* {destinations.map((destination) => {
            const { name, description, distance, travel } = destination;
            return (
              <Route
                key={destination.name}
                path={`${pathname}/${destination.name}`}
              >
                <h2>{name.toUpperCase()}</h2>
                <p>{description}</p>
                <div className={style.separationLine} />

                <div className={style.destinationStatistics}>
                  <span className={style.subHeading2}>AVG. DISTANCE</span>
                  <span className={style.subHeading2}>EST. TRAVEL TIME</span>
                  <span className={style.subHeading1}>
                    {distance.toUpperCase()}
                  </span>
                  <span className={style.subHeading1}>
                    {travel.toUpperCase()}
                  </span>
                </div>
              </Route>
            ); */}
          {/* })} */}
        </Routes>
      </div>
    </div>
  );
}
