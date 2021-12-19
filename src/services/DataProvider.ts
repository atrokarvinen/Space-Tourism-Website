import { SpaceTourismData } from "../models/SpaceTourismData";
import dataJson from "./data.json";

export class DataProvider {
  getSpaceTourismData(): SpaceTourismData {
    return dataJson;
  }
}
