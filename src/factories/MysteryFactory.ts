import { mysteriesJson } from "../sanctum-rosarium.json.js";

export class MysteryFactory {
  // [0,1,2,3,4,5,6]
  static #gloriosa = [1, 4];
  static #dolorosa = [3, 6];
  static #gaudiosa = [2, 5, 7];
  static #mysteriesJson = mysteriesJson;

  static buildMystery(weekdayNumber: number) {
    let dayMysteriesType: string;

    if (this.#gloriosa.includes(weekdayNumber)) {
      dayMysteriesType = "mysteriaGloriosa";
    } else if (this.#dolorosa.includes(weekdayNumber)) {
      dayMysteriesType = "mysteriaDolorosa";
    } else if (this.#gaudiosa.includes(weekdayNumber)) {
      dayMysteriesType = "mysteriaGaudiosa";
    } else {
      throw new Error("Invalid week day.");
    }

    const dayMysteries = this.#mysteriesJson[dayMysteriesType];

    const completeDayMystery = {
      type: dayMysteriesType,
      mysteries: dayMysteries,
    };

    return completeDayMystery;
  }
}
