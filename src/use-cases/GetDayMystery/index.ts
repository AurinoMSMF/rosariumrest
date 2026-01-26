import GetDayMysteryController from "./GetDayMysteryController.js";
import { GetDayMysteryUseCase } from "./GetDayMysteryUseCase.js";

const getDayMysteryUseCase = new GetDayMysteryUseCase();

const getDayMysteryController = new GetDayMysteryController(
  getDayMysteryUseCase,
);

export { getDayMysteryController, getDayMysteryUseCase };
