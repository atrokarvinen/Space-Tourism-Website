import style from "./Home.module.scss";

import React, { ReactElement } from "react";

interface HomeProps {}

export default function Home({}: HomeProps): ReactElement {
  return <div className={style.home}>Home</div>;
}
