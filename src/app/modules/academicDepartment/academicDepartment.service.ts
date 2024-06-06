import { TAcademicDepartment } from "./academicDepartment.interface";
import { academicDepartmentModel } from "./academicDepartment.model";

//createDepartment
const createAcademicDepartmentIntoDb = async (payload: TAcademicDepartment) => {
  const result = await academicDepartmentModel.create(payload);
  return result;
};

//getAllFaculty
const getAllAcademicDepartment = async () => {
  const result = await academicDepartmentModel.find();
  return result;
};

//singleAcademicDepartment
const getSingleAcademicDepartment = async (id: string) => {
  const result = await academicDepartmentModel.findOne({ _id: id });
  return result;
};
//updateAcademicDepartment
const updateAcademicDepartment = async (
  id: string,
  payload: Partial<TAcademicDepartment>
) => {
  const result = await academicDepartmentModel.findOneAndUpdate(
    { _id: id },
    payload,
    { new: true }
  );
  return result;
};

export const academicDepartmentServices = {
  createAcademicDepartmentIntoDb,
  getSingleAcademicDepartment,
  getAllAcademicDepartment,
  updateAcademicDepartment,
};
