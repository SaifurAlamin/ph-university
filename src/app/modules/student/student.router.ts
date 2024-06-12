import express from "express";
import { studentController } from "./student.controller";
import validateRequest from "../../middlewares/validationRequest";
import { studentValidations } from "./student.zod.validation";

const route = express.Router();

route.get("/getStudents", studentController.getAllStudents);
route.get("/getSingleStudent/:studentId", studentController.getSingleStudent);
route.delete("/delteStudent/:studentId", studentController.deleteStudent);
route.patch(
    "/updateStudent/:studentId",
    validateRequest(studentValidations.updateStudentValidation),
    studentController.updateStudent
);

export const studentsRoute = route;
