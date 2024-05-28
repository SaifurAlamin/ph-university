import express from "express";
import { studentController } from "./student.controller";

const route = express.Router();

route.get("/getStudents", studentController.getAllStudents);
route.get("/getSingleStudent/:studentId", studentController.getSingleStudent);

export const studentsRoute = route;
