import style from "./Router.module.scss";

import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Crew from "./components/Crew/Crew";
import Destination from "./components/Destination/Destination";
import Home from "./components/Home/Home";
import Technology from "./components/Technology/Technology";
import Navigation from "./components/Navigation/Navigation";
import NavigationOption from "./components/Navigation/NavigationOption";

export default function Router() {
  const homeLink = "/";
  const destinationLink = "/destination";
  const crewLink = "/crew";
  const technologyLink = "/technology";

  const location = useLocation();
  const locationPath = location.pathname;
  console.log(`locationPath: ${locationPath}`);

  const getBackgroundImageUrl = (location: string): string | undefined => {
    switch (location) {
      case homeLink:
        return "./assets/home/background-home-desktop.jpg";
      case destinationLink:
        return "./assets/destination/background-destination-desktop.jpg";
      case crewLink:
        return "./assets/crew/background-crew-desktop.jpg";
      case technologyLink:
        return "./assets/technology/background-technology-desktop.jpg";
      default:
        return undefined;
    }
  };

  const bgUrl = getBackgroundImageUrl(locationPath);

  const navOptions: NavigationOption[] = [
    { label: "HOME", linkPath: homeLink },
    { label: "DESTINATION", linkPath: destinationLink },
    { label: "CREW", linkPath: crewLink },
    { label: "TECHNOLOGY", linkPath: technologyLink },
  ];

  return (
    <div className={style.layout} style={{ backgroundImage: `url(${bgUrl}` }}>
      <Navigation options={navOptions} />
      <Routes>
        <Route path={homeLink} element={Home({})} />
        <Route path={destinationLink} element={Destination({})} />
        <Route path={crewLink} element={Crew({})} />
        <Route path={technologyLink} element={Technology({})} />
      </Routes>
    </div>
  );
}
