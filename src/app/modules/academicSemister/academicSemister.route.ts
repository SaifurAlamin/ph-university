import express, { NextFunction, Request, Response } from "express";
import { academicSemisterController } from "./academicSemister.controller";
import { AnyZodObject } from "zod";
import { academicSemisterValidation } from "./academicSemister.validation";

const route = express.Router();

const validateRequest = (schema: AnyZodObject) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        console.log(req.body)
        try {
            await schema.parseAsync({
                body: req.body,
            });
            next();
        } catch (err) {
            next(err);
        }
    };
};
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
