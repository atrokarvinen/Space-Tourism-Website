import { CrewMemberType } from "./CrewMemberType";
import { DestinationType } from "./DestinationType";
import { TechnologyType } from "./TechnologyType";

export interface SpaceTourismData {
  destination: DestinationType[];
  crew: CrewMemberType[];
  technology: TechnologyType[];
}
