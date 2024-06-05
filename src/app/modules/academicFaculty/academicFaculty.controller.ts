import { catchAsync } from "../../utils/catchAsync";
import { academicFacultyServices } from "./academicFaculty.service";

const createAcademicFaculty = catchAsync(async (req, res) => {
  const result = await academicFacultyServices.createAcademicFacultyIntoDb(
    req.body
  );

  res.status(200).json({
    success: true,
    message: "Faculty created successfully",
    data: result,
  });
});

//getAllfaculty
const getAllFaculty = catchAsync(async (req, res) => {
  const result = await academicFacultyServices.getAllAcademicFaculty();
  res.status(200).json({
    success: true,
    message: "Faculties fetched successfully",
    data: result,
  });
});

//Get Single Academic Faculty
const getSingleAcademicFaculty = catchAsync(async (req, res) => {
  const { facultyId } = req.params;
  console.log(facultyId);
  const result = await academicFacultyServices.getSingleAcademicFaculty(
    facultyId
  );
  res.status(200).json({
    success: true,
    message: "Faculty fetched successfully",
    data: result,
  });
});

// updatee Academic Faculty
const updateAcademicFaculty = catchAsync(async (req, res) => {
  const { facultyId } = req.params;

  const result = await academicFacultyServices.updateAcademicFaculty(
    facultyId,
    req.body
  );
  res.status(200).json({
    success: true,
    message: "Faculty Updated successfully",
    data: result,
  });
});

export const academicFacultyController = {
  createAcademicFaculty,
  getSingleAcademicFaculty,
  getAllFaculty,
  updateAcademicFaculty
};
