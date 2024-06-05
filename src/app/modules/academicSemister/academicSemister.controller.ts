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
const getAllSemister = catchAsync(async (req, res) => {
  const result = await academicSemisterServices.getAllAcademicSemister();
  res.status(200).json({
    success: true,
    message: "Semisters fetched successfully",
    data: result,
  });
});

//Get Single Academic Semister
const getSingleAcademicSemister = catchAsync(async (req, res) => {
  const { semisterId } = req.params
  console.log(semisterId)
  const result = await academicSemisterServices.getSingleAcademicSemister(semisterId);
  res.status(200).json({
    success: true,
    message: "Semister fetched successfully",
    data: result,
  });
});

// updatee Academic Semister
const updateAcademicSemister = catchAsync(async (req, res) => {
  const { semisterId } = req.params
  console.log(semisterId)
  const result = await academicSemisterServices.updateAcademicSemister(semisterId, req.body);
  res.status(200).json({
    success: true,
    message: "Semister Updated successfully",
    data: result,
  });
});

export const academicSemisterController = {
  createAcademicSemister,
  getAllSemister,
  getSingleAcademicSemister,
  updateAcademicSemister,
};
