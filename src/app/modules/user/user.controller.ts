import { NextFunction, Request, Response } from "express";
import { userServices } from "./user.service";

const createStudent = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const { password, student: studentData } = req.body;
    //Zod validation
    // const zodParseData = studentValidationSchema.parse(studentData);

    // service ke call dibe
    const result = await userServices.createStudentIntoDb(
      password,
      studentData,
    );

    res.status(200).json({
      success: true,
      message: "Student created successfully",
      data: result,
    });
  } catch (err) {
   next(err)
  }
};

export const userController = {
  createStudent
}
