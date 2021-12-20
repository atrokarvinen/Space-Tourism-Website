import style from "./Router.module.scss";

import { Route, Routes, useLocation } from "react-router-dom";

import Crew from "./components/Crew/Crew";
import Destination from "./components/Destination/Destination";
import Home from "./components/Home/Home";
import Technology from "./components/Technology/Technology";
import NavigationOption from "./components/Navigation/NavigationOption";
import { DataProvider } from "./services/DataProvider";
import Header from "./components/Header/Header";

export default function Router() {
  const homeLink = "/";
  const destinationLink = "/destination";
  const crewLink = "/crew";
  const technologyLink = "/technology";

  const location = useLocation();
  const locationPath = location.pathname;

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

  const bgUrl = getBackgroundImageUrl("/" + locationPath.split("/")[1]);

  const navOptions: NavigationOption[] = [
    { label: "HOME", linkPath: homeLink },
    { label: "DESTINATION", linkPath: destinationLink },
    { label: "CREW", linkPath: crewLink },
    { label: "TECHNOLOGY", linkPath: technologyLink },
  ];

  const spaceDataProvider = new DataProvider();
  const spaceData = spaceDataProvider.getSpaceTourismData();

  return (
    <div className={style.layout} style={{ backgroundImage: `url(${bgUrl}` }}>
      <Header options={navOptions} />
      <div className={style.content}>
        <Routes>
          <Route path={homeLink} element={Home({})} />
          <Route
            path={destinationLink + "/*"}
            element={Destination({ destinations: spaceData.destinations })}
          />
          <Route path={crewLink} element={Crew({})} />
          <Route path={technologyLink} element={Technology({})} />
        </Routes>
      </div>
    </div>
  );
}
