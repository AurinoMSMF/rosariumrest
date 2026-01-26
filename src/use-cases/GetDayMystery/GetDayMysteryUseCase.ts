import { Rosarium } from "../../entities/Rosarium.js";

export class GetDayMysteryUseCase {
  get(weekdayNumber: number) {
    const dayMystery = Rosarium.getMystery(weekdayNumber);

    return dayMystery;
  }
}
