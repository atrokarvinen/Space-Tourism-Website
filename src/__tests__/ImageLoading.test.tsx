import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

test.each([
  { route: "/", backgroundUrl: "/assets/home/background-home-desktop.jpg" },
  {
    route: "/destination",
    backgroundUrl: "/assets/destination/background-destination-desktop.jpg",
  },
  { route: "/crew", backgroundUrl: "/assets/crew/background-crew-desktop.jpg" },
  {
    route: "/technology",
    backgroundUrl: "/assets/technology/background-technology-desktop.jpg",
  },
])("loads correct background for the link page", ({ route, backgroundUrl }) => {
  const { container } = render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>
  );

  const elementWithBackground = container.getElementsByClassName("layout")[0];
  expect(elementWithBackground).toHaveStyle(
    `background-image: url(${backgroundUrl})`
  );
});
