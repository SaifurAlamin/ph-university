import express, { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import { academicFacultyValidation } from "./academicFaculty.validation";
import { academicFacultyController } from "./academicFaculty.controller";


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
    validateRequest(academicFacultyValidation.createAcademicFacultyValidation),
    academicFacultyController.createAcademicFaculty
);
route.get(
    "/getAllFaculty",
    academicFacultyController.getAllFaculty
);
route.get(
    "/getAcademicFaculty/:facultyId",
    academicFacultyController.getSingleAcademicFaculty
);
route.patch(
    "/updateAcademicFaculty/:facultyId",
    validateRequest(academicFacultyValidation.createAcademicFacultyValidation),
    academicFacultyController.updateAcademicFaculty
);

export const academicFacultyRoute = route;
