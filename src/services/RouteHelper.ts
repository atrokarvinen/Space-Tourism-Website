export function getLastLink(pathname: string): string {
  const paths = pathname.split("/");
  return paths[paths.length - 1];
}

export function convertToValidRoute(routeName: string): string {
  // The following is the/a correct regex to strip non-alphanumeric chars from an input string:
  const alphaNumbericString = routeName.replace(/\W/g, "-");
  return alphaNumbericString.toLowerCase();
}
