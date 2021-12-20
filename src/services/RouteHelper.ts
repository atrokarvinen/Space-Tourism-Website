export function getLastLink(pathname: string): string {
  const paths = pathname.split("/");
  return paths[paths.length - 1];
}
