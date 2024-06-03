import { academicSemisterServices } from "./academicSemister.service";
import { catchAsync } from "../../utils/catchAsync";

const createAcademicSemister = catchAsync(async (req, res) => {
  const result = await academicSemisterServices.createAcademicSemisterIntoDb(
    req.body
  );

  res.status(200).json({
    success: true,
    message: "Semister created successfully",
    data: result,
  });
});

export const academicSemisterController = {
  createAcademicSemister,
};
