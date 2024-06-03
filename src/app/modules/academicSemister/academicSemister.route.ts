import express, { NextFunction, Request, Response } from "express";
import { academicSemisterController, userController } from "./academicSemister.controller";
import { AnyZodObject } from "zod";
import { studentValidations } from "../student/student.zod.validation";

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
    "/create-student",
    validateRequest(studentValidations.createStudentValidation),
    academicSemisterController.createAcademicSemister
);

export const userRoute = route;
