import { StudentModel } from "../student.model";

const getAllStudentFromDb = async () => {
  const result = await StudentModel.find().populate('admissionSemister');
  return result;
};
const getSingleStudentFromDb = async (id: string) => {
  const result = await StudentModel.findOne({ id }).populate('admissionSemister');
  return result;
};

export const studentServices = {
  getAllStudentFromDb,
  getSingleStudentFromDb,
};
