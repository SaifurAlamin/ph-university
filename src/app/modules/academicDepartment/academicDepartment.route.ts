import express, { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import { academicDepartmentController } from "./academicDepartment.controller";
import { academicDepartmentValidation } from "./academicDepartment.validation";
import validateRequest from "../../middlewares/validationRequest";


const route = express.Router();


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
