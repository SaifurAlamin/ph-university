import express, { NextFunction, Request, Response } from "express";
import { academicSemisterController } from "./academicSemister.controller";
import { AnyZodObject } from "zod";
import { academicSemisterValidation } from "./academicSemister.validation";

const route = express.Router();

const validateRequest = (schema: AnyZodObject) => {
    return async (req: Request, res: Response, next: NextFunction) => {
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
    "/create-academic-student",
    validateRequest(academicSemisterValidation.createAcademicSemisterValidationSchema),
    academicSemisterController.createAcademicSemister
);

export const userRoute = route;
