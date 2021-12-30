import NavigationOption from "../components/Navigation/NavigationOption";
import {
  convertToValidRoute,
  getCurrentItem,
  getLastLink,
  INameable,
  toNavigationOptions,
} from "../services/RouteHelper";

it("replaces invalid characters of route", () => {
  const validRoute = convertToValidRoute("this route is not valid");
  expect(validRoute).toBe("this-route-is-not-valid");
});

it("changes the route to lower case", () => {
  const route = "TheRouteShouldNotHaveCapitalLetters";
  const validRoute = convertToValidRoute(route);
  expect(validRoute).toBe(route.toLowerCase());
});

it("returns the last part of the link", () => {
  const lastLink = getLastLink("/destination/moon");
  expect(lastLink).toBe("moon");
});

it("converts an array to navigation options", () => {
  const names = [{ name: "link1" }, { name: "link2" }];
  const navigationOptions: NavigationOption[] = toNavigationOptions(names);

  expect(navigationOptions).toHaveLength(names.length);
  expect(navigationOptions).toContainEqual<NavigationOption>({
    label: "LINK1",
    linkPath: "link1",
  });
  expect(navigationOptions).toContainEqual<NavigationOption>({
    label: "LINK2",
    linkPath: "link2",
  });
});

it("returns correct selected navigation item", () => {
  const names = [{ name: "link1" }, { name: "link2" }];
  const pathname = "home/link2";

  const currentItem = getCurrentItem(names, pathname);
  expect(currentItem).toStrictEqual<INameable>({ name: "link2" });
});

