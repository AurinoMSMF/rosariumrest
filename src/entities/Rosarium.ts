import { MysteryFactory } from "../factories/MysteryFactory.js";

export class Rosarium {
  constructor() {
    throw new Error("Esta classe não pode ser instanciada");
  }

  static getMystery(weekdayNumber: number) {
    return MysteryFactory.buildMystery(weekdayNumber);
  }
}
