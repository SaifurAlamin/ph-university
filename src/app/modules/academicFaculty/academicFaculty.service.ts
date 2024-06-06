import { TAcademicFaculty } from "./academicFaculty.interface";
import { academicFacultyModel } from "./academicFaculty.model";

//createFaculty
const createAcademicFacultyIntoDb = async (payload: TAcademicFaculty) => {
  const result = await academicFacultyModel.create(payload);
  return result;
};

//getAllFaculty
const getAllAcademicFaculty = async () => {
  const result = await academicFacultyModel.find()
  return result;
}

//singleAcademicFaculty
const getSingleAcademicFaculty = async (id: string) => {
  const result = await academicFacultyModel.findOne({ _id: id })
  return result;
}
//updateAcademicFaculty
const updateAcademicFaculty = async (id: string, payload: Partial<TAcademicFaculty>) => {

  const result = await academicFacultyModel.findOneAndUpdate({ _id: id }, payload, { new: true })
  return result;
}

export const academicFacultyServices = {
  createAcademicFacultyIntoDb,
  getSingleAcademicFaculty,
getAllAcademicFaculty,updateAcademicFaculty
};
