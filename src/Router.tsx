import style from "./Router.module.scss";

import React from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";

import Crew from "./components/Crew/Crew";
import Destination from "./components/Destination/Destination";
import Home from "./components/Home/Home";
import Technology from "./components/Technology/Technology";

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

  return (
    <div className={style.layout} style={{ backgroundImage: `url(${bgUrl}` }}>
      <nav>
        <ul>
          <li>
            <Link to={homeLink}>Home</Link>
          </li>
          <li>
            <Link to={destinationLink}>Destination</Link>
          </li>
          <li>
            <Link to={crewLink}>Crew</Link>
          </li>
          <li>
            <Link to={technologyLink}>Technology</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path={homeLink} element={Home({})} />
        <Route path={destinationLink} element={Destination({})} />
        <Route path={crewLink} element={Crew({})} />
        <Route path={technologyLink} element={Technology({})} />
      </Routes>
    </div>
  );
}
