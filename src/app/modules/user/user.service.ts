import mongoose, { startSession } from "mongoose";
import config from "../../config";
import { TAcademicSemister } from "../academicSemister/academicSemister.interface";
import { academicSemisterModel } from "../academicSemister/academicSemister.model";
import { StudentModel } from "../student.model";
import { Student } from "../student/student.interface";
import { NewUser, TUser } from "./user.interface";
// import { NewUser, TUser } from "./user.interface";
import { userModel } from "./user.model";
import { generateStudentId } from "./user.utils";

const createStudentIntoDb = async (password: string, payload: Student) => {
  const userData: Partial<TUser> = {};
  if (!password) {
    userData.password = config.default_pass as string;
  } else {
    userData.password = password;
  }
  //set Role
  userData.role = "student";


  //find academic semister info 
  const academicSemisterInfo = await academicSemisterModel.findById(payload.admissionSemister)
  // start session 
  const session = await mongoose.startSession()
  try {
    session.startTransaction()
    userData.id = await generateStudentId(academicSemisterInfo as TAcademicSemister)

    //create user (transaction-1)
    const newUser = await userModel.create([userData], { session });

    if (!newUser.length) {
      throw new Error('Failed to create user')
    }
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id;
    //create Student (transaction-1)
    const newStudent = await StudentModel.create([payload], { session });
    if (!newStudent.length) {
      throw new Error('Failed to create Student')
    }
    await session.commitTransaction()
    await session.endSession();
    return newStudent;
  } catch (err) {
    await session.abortTransaction()
    await session.endSession();
    throw err;
  }
};

export const userServices = {
  createStudentIntoDb,
};
