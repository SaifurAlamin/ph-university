import express, { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import { academicDepartmentController } from "./academicDepartment.controller";
import { academicDepartmentValidation } from "./academicDepartment.validation";


const route = express.Router();

const validateRequest = (schema: AnyZodObject) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        console.log(req.params)
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
    validateRequest(academicDepartmentValidation.createAcademicDepartmentValidation),
    academicDepartmentController.createAcademicDepartment
);
route.get(
    "/getAllDepartment",
    academicDepartmentController.getAllDepartment
);
route.get(
    "/getAcademicDepartment/:departmentId",
    academicDepartmentController.getSingleAcademicDepartment
);
route.patch(
    "/updateAcademicDepartment/:departmentId",
    validateRequest(academicDepartmentValidation.createAcademicDepartmentValidation),
    academicDepartmentController.updateAcademicDepartment
);

export const academicDepartmentRoute = route;
