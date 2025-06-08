import { GetDayMysteryController } from "./GetDayMysteryController";
import { GetDayMysteryUseCase } from "./GetDayMysteryUseCase";

const getDayMysteryUseCase = new GetDayMysteryUseCase();

const getDayMysteryController = new GetDayMysteryController(getDayMysteryUseCase);

export { getDayMysteryController, getDayMysteryUseCase };