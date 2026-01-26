import { Rosarium } from "../../entities/Rosarium.ts";

export class GetDayMysteryUseCase {
  get(weekdayNumber: number) {
    const dayMystery = Rosarium.getMystery(weekdayNumber);

    return dayMystery;
  }
}
