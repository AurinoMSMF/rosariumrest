import { Router } from "express";
import { getDayMysteryController } from "./use-cases/GetDayMystery/index.js";

const router = Router();

router.get("/day-mysteries/", (request, response) => {
  return getDayMysteryController.handle(request, response);
});

router.get("/day-mysteries/:day", (request, response) => {
  return getDayMysteryController.handle(request, response);
});

export { router };
