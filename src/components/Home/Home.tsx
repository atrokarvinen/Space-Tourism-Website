import style from "./Home.module.scss";

import React, { ReactElement } from "react";

import { ExploreButton } from "./ExploreButton/ExploreButton";

interface HomeProps {
  exploreButtonLink: string;
}

export default function Home({ exploreButtonLink }: HomeProps): ReactElement {
  return (
    <div className={style.home}>
      <div className={style.intro}>
        <h5>SO, YOU WANT TO TRAVEL TO</h5>
        <h1>SPACE</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <ExploreButton navigationLink={exploreButtonLink} />
    </div>
  );
}
