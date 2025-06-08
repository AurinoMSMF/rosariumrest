import { Request, Response } from "express";
import { GetDayMysteryUseCase } from "./GetDayMysteryUseCase";
import { getDay } from "date-fns";
import {tz} from "@date-fns/tz";

export class GetDayMysteryController
{
    constructor(private getMysteryUseCase : GetDayMysteryUseCase)
    {
    }

    handle( request : Request, response : Response )
    {
        let weekDayNumber: number; 

        const dayParam = request.params.day; 

        if(dayParam)
        {
            console.log("veio argumento");
            // if(isNaN(Number(dayParam)))
            // {

            // }
            weekDayNumber = 0;
        }
        else 
        {
            weekDayNumber = getDay(new Date, { in: tz("America/Fortaleza")});
        }

        console.log(weekDayNumber);

        try {
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