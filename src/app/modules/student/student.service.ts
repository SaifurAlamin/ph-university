import mongoose, { startSession } from "mongoose";
import { StudentModel } from "../student.model";
import { userModel } from "../user/user.model";
import { Student } from "./student.interface";

const getAllStudentFromDb = async () => {
  const result = await StudentModel.find().populate('admissionSemister');
  return result;
};
const getSingleStudentFromDb = async (id: string) => {
  const result = await StudentModel.findOne({ id }).populate('admissionSemister');
  return result;
};
const deleteStudentFromDb = async (id: string) => {
  const session = await mongoose.startSession()
  try {
    session.startTransaction();
    const deleteStudent = await StudentModel.findOneAndUpdate({ id }, { isDeleted: true }, { new: true, session })
    if (!deleteStudent) {
      throw new Error('Student not found')
    }
    const deleteUser = await userModel.findOneAndUpdate({ id }, { isDeleted: true }, { new: true, session })
    if (!deleteUser) {
      throw new Error('User not found')
    }
    await session.commitTransaction()
    await session.endSession()
    return deleteStudent;
  }
  catch (err) {
    await session.abortTransaction()
    await session.endSession()
    throw err;
  }
}
const updateStudentIntoDb = async (id: string, payload: Partial<Student>) => {
  const result = await StudentModel.findOneAndUpdate({ id }, payload, { new: true });
  return result;
};


export const studentServices = {
  getAllStudentFromDb,
  getSingleStudentFromDb,
  deleteStudentFromDb,
  updateStudentIntoDb
};
