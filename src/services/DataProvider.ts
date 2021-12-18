import { SpaceTourismData } from "../models/SpaceTourismData";
import dataJson from "../../starter-code/data.json";

export class DataProvider {
  getSpaceTourismData(): SpaceTourismData {
    return dataJson;
  }
}
