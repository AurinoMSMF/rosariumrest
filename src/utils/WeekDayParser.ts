export class WeekDayParser
{
    static #daysMap : Record<string, number> = {
        "sunday"    : 0,
        "monday"    : 1,
        "tuesday"   : 2,
        "wednesday" : 3,
        "thursday"  : 4,
        "friday"    : 5,
        "saturday"  : 6
    }

    static parse(weekDayString : string) : number 
    {
        return this.#daysMap[weekDayString] ?? null;
    }
}