import { Router } from "express";
import { getDayMysteryController } from "./use-cases/GetDayMystery";

const router = Router();

router.get("/day-mystery/", (request, response) => {
  return getDayMysteryController.handle(request, response);
});

router.get("/day-mystery/:day", (request, response) => {
  return getDayMysteryController.handle(request, response);
});

export { router };
