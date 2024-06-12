import express, { NextFunction, Request, Response } from "express";
import { academicSemisterController } from "./academicSemister.controller";
import { academicSemisterValidation } from "./academicSemister.validation";
import validateRequest from "../../middlewares/validationRequest";

const route = express.Router();

route.post(
    "/create",
    validateRequest(academicSemisterValidation.createAcademicSemisterValidation),
    academicSemisterController.createAcademicSemister
);
route.get(
    "/getAllSemister",
    academicSemisterController.getAllSemister
);
route.get(
    "/getAcademicSemister/:semisterId",
    academicSemisterController.getSingleAcademicSemister
);
route.patch(
    "/updateAcademicSemister/:semisterId",
    validateRequest(academicSemisterValidation.updateAcademicSemisterValidation),
    academicSemisterController.updateAcademicSemister
);

export const academicSemisterRoute = route;
