import { Schema, model, connect } from "mongoose";
import { GUrdian, Student } from "./student/student.interface";


const gurdianSchema = new Schema<GUrdian>({

  fatherName: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherNumber: {
    type: String,
    required: true,
  },
  fatherNumber: {
    type: String,
    required: true,
  },

})

const studentSchema = new Schema<Student>({
  id: { type: String, required: true, unique: true },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'User Id is required'],
    unique: true,
    ref: 'User'
  },
  name: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  dateOfBirth: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  gender: {
    type: String,
    enum: ["female", "male", "other"],
    required: true
  },
  contactNumber: { type: String },
  profileImg: { type: String },
  bloodGroup: {
    type: String,
    enum: ["A+", "B+", "O+"],
    required: true,
  },
  gurdian: gurdianSchema,
  admissionSemister: {
    type: Schema.Types.ObjectId,
    ref: 'AcademicSemister'
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },

});



export const StudentModel = model<Student>('Student', studentSchema);
