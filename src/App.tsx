import style from "./App.module.scss";

import { isMobile } from "react-device-detect";
import { useLocation, useNavigate } from "react-router-dom";

import Router from "./Router";
import { DataProvider } from "./services/DataProvider";
import { SpaceTourismData } from "./models/SpaceTourismData";
import NavigationOption from "./components/Navigation/NavigationOption";
import Header from "./components/Header/Header";
import { useState } from "react";
import Sidebar from "./components/Header/Sidebar/Sidebar";

export default function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const deviceType = isMobile ? "mobile" : "desktop";
  const homeLink = "/Space-Tourism-Website";

  const getLinks = (spaceData: SpaceTourismData): NavigationOption[] => {
    const home: NavigationOption = {
      label: "HOME",
      linkPath: homeLink,
    };

    const dataTabs = Object.keys(spaceData).map((name, index) => {
      return {
        linkPath: `/${name}`,
        label: name.toUpperCase(),
        onclick: isMobile ? () => setIsSidebarVisible(false) : undefined,
      };
    });

    const tabs: NavigationOption[] = [];
    tabs.push(home);
    tabs.push(...dataTabs);
    return tabs;
  };

  const spaceDataProvider = new DataProvider();
  const spaceData = spaceDataProvider.getSpaceTourismData();

  const navOptions = getLinks(spaceData);

  const linkPath = location.pathname.split("/")[1];
  const selectedLink = Object.keys(spaceData).find((name) => {
    return name === linkPath;
  });
  const bgName = selectedLink ?? "home";
  const bgUrl = `url(${process.env.PUBLIC_URL}/assets/${bgName}/background-${bgName}-${deviceType}.jpg)`;

  return (
    <div className={style.layout} style={{ backgroundImage: bgUrl }}>
      <Sidebar
        isVisible={isSidebarVisible}
        onClose={() => setIsSidebarVisible(false)}
        navigationOptions={navOptions}
      />
      <Header
        isSidebarVisible={isSidebarVisible}
        setIsSidebarVisible={setIsSidebarVisible}
        navigationOptions={navOptions}
        logoClick={() => {
          navigate(homeLink);
        }}
      />
      <div className={style.content}>
        <Router navOptions={navOptions} spaceData={spaceData} />
      </div>
    </div>
  );
}
