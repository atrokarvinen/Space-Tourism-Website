import { isMobile } from "react-device-detect";
import { useLocation } from "react-router-dom";

import Router from "./Router";
import { DataProvider } from "./services/DataProvider";
import { SpaceTourismData } from "./models/SpaceTourismData";
import NavigationOption from "./components/Navigation/NavigationOption";

export default function App() {
  const location = useLocation();
  const deviceType = isMobile ? "mobile" : "desktop";

  const getLinks = (spaceData: SpaceTourismData): NavigationOption[] => {
    const tabs: NavigationOption[] = [];
    const home: NavigationOption = {
      label: "HOME",
      linkPath: "/Space-Tourism-Website",
    };

    const dataTabs = Object.keys(spaceData).map((name, index) => {
      return {
        linkPath: `/${name}`,
        label: name.toUpperCase(),
      };
    });

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
  const bgUrl = `${process.env.PUBLIC_URL}/assets/${bgName}/background-${bgName}-${deviceType}.jpg`;

  return <Router navOptions={navOptions} spaceData={spaceData} bgUrl={bgUrl} />;
}
