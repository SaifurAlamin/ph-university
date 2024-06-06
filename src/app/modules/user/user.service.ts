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
  console.log(academicSemisterInfo)
  userData.id = await generateStudentId(academicSemisterInfo as TAcademicSemister)

  //create user
  const newUser = await userModel.create(userData);

  //create Student
  if (Object.keys(newUser).length) {
    payload.id = newUser.id;
    payload.user = newUser._id;
    const newStudent = await StudentModel.create(payload);
    return newStudent;
  }
};

export const userServices = {
  createStudentIntoDb,
};
