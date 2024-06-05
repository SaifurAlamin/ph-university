import { catchAsync } from "../../utils/catchAsync";
import { academicDepartmentServices } from "./academicDepartment.service";


const createAcademicDepartment = catchAsync(async (req, res) => {
  const result = await academicDepartmentServices.createAcademicDepartmentIntoDb(
    req.body
  );

  res.status(200).json({
    success: true,
    message: "Academic Department created successfully",
    data: result,
  });
});

//getAlldepartment
const getAllDepartment = catchAsync(async (req, res) => {
  const result = await academicDepartmentServices.getAllAcademicDepartment();
  res.status(200).json({
    success: true,
    message: "Academic Department fetched successfully",
    data: result,
  });
});

//Get Single Academic department
const getSingleAcademicDepartment = catchAsync(async (req, res) => {
  const { departmentId } = req.params;
  console.log(departmentId);
  const result = await academicDepartmentServices.getSingleAcademicDepartment(
    departmentId
  );
  res.status(200).json({
    success: true,
    message: "Academic Department fetched successfully",
    data: result,
  });
});

// updatee Academic Department
const updateAcademicDepartment = catchAsync(async (req, res) => {
  const { departmentId } = req.params;

  const result = await academicDepartmentServices.updateAcademicDepartment(
    departmentId,
    req.body
  );
  res.status(200).json({
    success: true,
    message: "Academic Department Updated successfully",
    data: result,
  });
});

export const academicDepartmentController = {
  createAcademicDepartment,
  getSingleAcademicDepartment,
  getAllDepartment,
  updateAcademicDepartment
};
