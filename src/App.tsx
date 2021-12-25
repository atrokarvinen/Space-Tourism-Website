import { useState } from "react";
import NavigationOption from "./components/Navigation/NavigationOption";
import Router from "./Router";
import { DataProvider } from "./services/DataProvider";
import { SpaceTourismData } from "./models/SpaceTourismData";
import { isMobile } from "react-device-detect";

export default function App() {
  const [backgroungImg, setBackgroungImg] = useState<string | undefined>();

  const deviceType = isMobile ? "mobile" : "desktop";
  const homeImage = `/assets/home/background-home-${deviceType}.jpg`;

  const getLinks = (spaceData: SpaceTourismData): NavigationOption[] => {
    const tabs: NavigationOption[] = [];
    const home: NavigationOption = {
      label: "HOME",
      linkPath: "/",
      onClick: () => setBackgroungImg(homeImage),
    };

    const dataTabs = Object.keys(spaceData).map((name) => {
      const bgImage = `/assets/${name}/background-${name}-${deviceType}.jpg`;
      return {
        linkPath: `/${name}`,
        label: name.toUpperCase(),
        onClick: () => setBackgroungImg(bgImage),
      };
    });

    tabs.push(home);
    tabs.push(...dataTabs);
    return tabs;
  };

  const spaceDataProvider = new DataProvider();
  const spaceData = spaceDataProvider.getSpaceTourismData();

  const navOptions = getLinks(spaceData);
  const bgUrl = backgroungImg ?? homeImage;

  return <Router navOptions={navOptions} spaceData={spaceData} bgUrl={bgUrl} />;
}
