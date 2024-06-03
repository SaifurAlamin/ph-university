import { NextFunction, Request, Response } from "express";


const createAcademicSemister = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { password, student: studentData } = req.body;
    //Zod validation
    // const zodParseData = studentValidationSchema.parse(studentData);




    res.status(200).json({
      success: true,
      message: "Student created successfully",

    });
  } catch (err) {
    next(err)
  }
};

export const academicSemisterController = {
  createAcademicSemister
}
