import { CrewMemberType } from "./CrewMemberType";
import { DestinationType } from "./DestinationType";
import { TechnologyType } from "./TechnologyType";

export interface SpaceTourismData {
  destinations: DestinationType[];
  crew: CrewMemberType[];
  technology: TechnologyType[];
}
