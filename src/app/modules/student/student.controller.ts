import { NextFunction, Request, RequestHandler, Response } from "express";
import { studentServices } from "./student.service";
import { promise } from "zod";
import { catchAsync } from "../../utils/catchAsync";

// higher ordr function : ayta akta function recive kore akta function return kore , ayta muloto async e try catch er poriborte use KeyboardEvent(baki ro thakte pare ami janina)

const getSingleStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await studentServices.getSingleStudentFromDb(studentId);
  res.status(200).json({
    success: true,
    message: "Student retrive successfully",
    data: result,
  });
});

const getAllStudents = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await studentServices.getAllStudentFromDb();
    res.status(200).json({
      success: true,
      message: "Students retrive successfully",
      data: result,
    });
  }
);

export const studentController = {
  getAllStudents,
  getSingleStudent,
};
