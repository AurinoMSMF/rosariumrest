import { mysteriesJson } from "../sanctum-rosarium.json.js";

export class MysteryFactory {
  // [0,1,2,3,4,5,6]
  static #gloriosa = [0, 3];
  static #dolorosa = [2, 5];
  static #gaudiosa = [1, 4, 6];
  static #mysteriesJson = mysteriesJson;

  static buildMystery(weekdayNumber: number) {
    let dayMystery: string;

    if (this.#gloriosa.includes(weekdayNumber)) {
      dayMystery = "mysteriaGloriosa";
    } else if (this.#dolorosa.includes(weekdayNumber)) {
      dayMystery = "mysteriaDolorosa";
    } else if (this.#gaudiosa.includes(weekdayNumber)) {
      dayMystery = "mysteriaGaudiosa";
    } else {
      throw new Error("Invalid week day.");
    }

    return this.#mysteriesJson[dayMystery];
  }
}
