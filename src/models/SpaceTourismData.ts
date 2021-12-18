import { CrewMember } from "./CrewMember";
import { Destination } from "./Destination";
import { Technology } from "./Technology";

export interface SpaceTourismData {
  destinations: Destination[];
  crew: CrewMember[];
  technology: Technology[];
}
