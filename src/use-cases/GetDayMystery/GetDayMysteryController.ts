import { Request, Response } from "express";
import { GetDayMysteryUseCase } from "./GetDayMysteryUseCase";
import { getDay } from "date-fns";
import {tz} from "@date-fns/tz";
import { WeekDayParser } from "../../utils/WeekDayParser";

export class GetDayMysteryController
{
    constructor(private getMysteryUseCase : GetDayMysteryUseCase)
    {
    }

    handle( request : Request, response : Response )
    {
        let weekDayNumber: number; 

        const weekDayParam = request.params.day; 

        try {

            if(weekDayParam)
            {
                if(isNaN(Number(weekDayParam)))
                {
                    weekDayNumber = WeekDayParser.parse(weekDayParam);
                }
                else
                {
                    weekDayNumber = Number(weekDayParam);
                }
            }
            else 
            {
                weekDayNumber = getDay(new Date, { in: tz("America/Fortaleza")});
            }

            if(weekDayNumber === null) 
            {
                throw new Error(`Invalid parameter: ${weekDayNumber}`);
            }

            const dayMystery = this.getMysteryUseCase.get(weekDayNumber);
            
            response.status(200).send(dayMystery);
            return;
        } catch (err) {
            response.status(400).json({
                message: err || "Unexpected error"
            })
            return;
        }

    }
}