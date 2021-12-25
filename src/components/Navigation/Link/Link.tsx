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
  return (
    <li>
      <Link to={link.linkPath} onClick={link.onClick}>
        {children}
      </Link>
    </li>
  );
}
