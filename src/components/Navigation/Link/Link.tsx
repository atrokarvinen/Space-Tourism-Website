import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import NavigationOption from "../NavigationOption";

interface LinkItemProps {
  link: NavigationOption;
  children: ReactElement;
}

export default function LinkItem({
  link,
  children,
}: LinkItemProps): ReactElement {
  const selectedSubTab = link.selectedSubTab ? "/" + link.selectedSubTab : "";
  return (
    <li>
      <Link to={link.linkPath + selectedSubTab} onClick={link.setSelectedTab}>
        {children}
      </Link>
    </li>
  );
}
