export class WeekDayParser {
  static #daysMap: Record<string, number> = {
    sunday: 1,
    monday: 2,
    tuesday: 3,
    wednesday: 4,
    thursday: 5,
    friday: 6,
    saturday: 7,
  };

  static parse(weekDayString: string): number {
    return this.#daysMap[weekDayString] ?? null;
  }
}
