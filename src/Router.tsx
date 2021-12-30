import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import Crew from "./components/Crew/Crew";
import Destination from "./components/Destination/Destination";
import Home from "./components/Home/Home";
import Technology from "./components/Technology/Technology";
import NavigationOption from "./components/Navigation/NavigationOption";
import { SpaceTourismData } from "./models/SpaceTourismData";

interface RouterProps {
  navOptions: NavigationOption[];
  spaceData: SpaceTourismData;
}

export default function Router({ navOptions, spaceData }: RouterProps) {
  const navigate = useNavigate();

  const homeLink = navOptions[0];
  const destinationLink = navOptions[1];
  return (
    <Routes>
      <Route
        path={homeLink.linkPath}
        element={Home({
          exploreButtonOnClick: () => {
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
      <Route path="*" element={<Navigate to={homeLink.linkPath} />} />
    </Routes>
  );
}
