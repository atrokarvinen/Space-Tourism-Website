import NavigationOption from "../components/Navigation/NavigationOption";

export interface INameable {
  name: string;
}

// Returns the last string of the link e.g. /destination/moon => moon
export function getLastLink(pathname: string): string {
  const paths = pathname.split("/");
  return paths[paths.length - 1];
}

export function convertToValidRoute(routeName: string): string {
  // The following is the/a correct regex to strip non-alphanumeric chars from an input string:
  const alphaNumbericString = routeName.replace(/\W/g, "-");
  return alphaNumbericString.toLowerCase();
}

export function toNavigationOptions(items: INameable[]): NavigationOption[] {
  return items.map((item) => {
    const validRoute = convertToValidRoute(item.name);
    return {
      label: item.name.toUpperCase(),
      linkPath: validRoute,
    };
  });
}

// Returns the selected sub tab item or defaults to the first item of the array
export function getCurrentItem(items: INameable[], pathname: string): any {
  const linkPath = getLastLink(pathname);
  const selectedItem = items.find((item) => {
    return convertToValidRoute(item.name) === linkPath;
  });

  const defaultItem = items[0];
  const currentItem = selectedItem ?? defaultItem;

  return currentItem;
}
