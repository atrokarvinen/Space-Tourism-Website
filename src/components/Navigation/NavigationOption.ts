export default interface NavigationOption {
  label: string;
  linkPath: string;

  selectedSubTab?: string;
  setSelectedTab?: () => void;
}
