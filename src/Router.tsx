import style from "./Router.module.scss";

import { Route, Routes, useNavigate } from "react-router-dom";

import Crew from "./components/Crew/Crew";
import Destination from "./components/Destination/Destination";
import Home from "./components/Home/Home";
import Technology from "./components/Technology/Technology";
import NavigationOption from "./components/Navigation/NavigationOption";
import Header from "./components/Header/Header";
import { SpaceTourismData } from "./models/SpaceTourismData";

interface RouterProps {
  navOptions: NavigationOption[];
  spaceData: SpaceTourismData;
  bgUrl: string;
}

export default function Router({ navOptions, spaceData, bgUrl }: RouterProps) {
  const navigate = useNavigate();

  const homeLink = navOptions[0];
  const destinationLink = navOptions[1];
  return (
    <div className={style.layout} style={{ backgroundImage: `url(${bgUrl}` }}>
      <Header
        navigationOptions={navOptions}
        logoClick={() => {
          homeLink.onClick();
          navigate(homeLink.linkPath);
        }}
      />
      <div className={style.content}>
        <Routes>
          <Route
            path={navOptions[0].linkPath}
            element={Home({
              exploreButtonOnClick: () => {
                destinationLink.onClick();
                navigate(destinationLink.linkPath);
              },
            })}
          />
          <Route
            path={destinationLink.linkPath + "/*"}
            element={Destination({
              destinations: spaceData.destination,
            })}
          />
          <Route
            path={navOptions[2].linkPath + "/*"}
            element={Crew({
              crewMembers: spaceData.crew,
            })}
          />
          <Route
            path={navOptions[3].linkPath + "/*"}
            element={Technology({
              technologies: spaceData.technology,
            })}
          />
        </Routes>
      </div>
    </div>
  );
}
