import express, { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import { academicFacultyValidation } from "./academicFaculty.validation";
import { academicFacultyController } from "./academicFaculty.controller";
import validateRequest from "../../middlewares/validationRequest";


const route = express.Router();

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
