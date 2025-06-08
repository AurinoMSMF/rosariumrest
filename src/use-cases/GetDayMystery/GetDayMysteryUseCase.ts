import { Rosarium } from "../../entities/Rosarium";

export class GetDayMysteryUseCase
{

    get( weekdayNumber : number )
    {
        const dayMystery = Rosarium.getMystery( weekdayNumber );
        
        return dayMystery;
    }

}