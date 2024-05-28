import config from "../../config";
import { StudentModel } from "../student.model";
import { Student } from "../student/student.interface";
import { NewUser, TUser } from "./user.interface";
// import { NewUser, TUser } from "./user.interface";
import { userModel } from "./user.model";

const createStudentIntoDb = async (password: string, studentData: Student) => {
  let userData: NewUser= {};
  if (!password) {
    userData.password = config.default_pass as string;
  } else {
    userData.password = password;
  }
  //set Role
  userData.role = "student";
  userData.id = "20300201";

  //create user
  const newUser = await userModel.create(userData);

  //create Student
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id;
    const newStudent = await StudentModel.create(studentData);
    return newStudent;
  }
};

export const userServices = {
  createStudentIntoDb,
};
