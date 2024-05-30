import { NextFunction, Request, RequestHandler, Response } from "express";
import { studentServices } from "./student.service";


const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  }
}

const getAllStudents = catchAsync(
  async (req, res, next) => {
    try {
      const result = await studentServices.getAllStudentFromDb();
      res.status(200).json({
        success: true,
        message: "Students retrive successfully",
        data: result,
      });
    } catch (err) {
      next(err) // next ta hocche akta garir moton,ate parameter deya manei err hisebe kaj kore(module-11 er 11 no video)
    }
  }
)
const getSingleStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { studentId } = req.params
    const result = await studentServices.getSingleStudentFromDb(studentId);
    res.status(200).json({
      success: true,
      message: "Student retrive successfully",
      data: result,
    });
  } catch (err) {
    next(err)
  }
};

export const studentController = {

  getAllStudents,
  getSingleStudent
};
