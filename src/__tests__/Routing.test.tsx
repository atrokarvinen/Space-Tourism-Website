import { render } from "@testing-library/react";
import { MemoryRouter, Route, Router, Navigator } from "react-router-dom";
import { createMemoryHistory } from "history";

import App from "../App";
import { DataProvider } from "../services/DataProvider";
import Destination from "../components/Destination/Destination";

const history = createMemoryHistory();

const dataProvider = new DataProvider();
const spaceData = dataProvider.getSpaceTourismData();

test.each([
  { route: "/" },
  { route: "/some-input" },
  { route: "/never-heard-route" },
])("unknown routes redirect to home", ({ route }) => {
  history.push(route);

  render(
    <Router location={history.location} navigator={history}>
      <App />
    </Router>
  );

  expect(history.location.pathname).toBe("/Space-Tourism-Website");
});

it("returns to previous page with browser back", () => {
  history.push("/Space-Tourism-Website");
  history.push("/destination");

  const { container: destinationContainer } = render(
    <Router location={history.location} navigator={history}>
      <App />
    </Router>
  );

  expect(history.location.pathname).toBe("/destination");
  expect(destinationContainer).toHaveTextContent("01 PICK YOUR DESTINATION");

  history.back();

  const { container: homeContainer } = render(
    <Router location={history.location} navigator={history}>
      <App />
    </Router>
  );

  expect(history.location.pathname).toBe("/Space-Tourism-Website");
  expect(homeContainer).toHaveTextContent("Explore");
});

it("loads the first destination item upon entering the page", () => {
  history.push("/destination");

  const { container } = render(
    <Router location={history.location} navigator={history}>
      <App />
    </Router>
  );

  const destinationName = spaceData.destination[0].name.toUpperCase();
  expect(container).toHaveTextContent(destinationName);
});

it("loads the first crew item upon entering the page", () => {
  history.push("/crew");

  const { container } = render(
    <Router location={history.location} navigator={history}>
      <App />
    </Router>
  );

  const crewMemberName = spaceData.crew[0].name.toUpperCase();
  expect(container).toHaveTextContent(crewMemberName);
});

it("loads the first technology item upon entering the page", () => {
  history.push("/technology");

  const { container } = render(
    <Router location={history.location} navigator={history}>
      <App />
    </Router>
  );

  const technologyName = spaceData.technology[0].name.toUpperCase();
  expect(container).toHaveTextContent(technologyName);
});
