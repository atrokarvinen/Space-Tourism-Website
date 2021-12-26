import style from "./Destination.module.scss";

import React, { ReactElement } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { DestinationType } from "../../models/DestinationType";
import Navigation from "../Navigation/Navigation";
import NavigationOption from "../Navigation/NavigationOption";
import {
  getCurrentItem,
  toNavigationOptions,
} from "../../services/RouteHelper";
import DestinationContent from "./DestinationContent";

interface DestinationProps {
  destinations: DestinationType[];
}

export default function Destination({
  destinations,
}: DestinationProps): ReactElement {
  const location = useLocation();
  const currentDestination: DestinationType = getCurrentItem(
    destinations,
    location.pathname
  );

  const { images } = currentDestination;
  const publicImagePath = images.png.replace(".", process.env.PUBLIC_URL);

  const navOptions: NavigationOption[] = toNavigationOptions(destinations);

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
            return (
              <Route
                key={destination.name}
                path={destination.name.toLowerCase()}
                element={<DestinationContent destination={destination} />}
              />
            );
          })}
          <Route
            path="*"
            element={<DestinationContent destination={currentDestination} />}
          />
        </Routes>
      </div>
    </div>
  );
}
