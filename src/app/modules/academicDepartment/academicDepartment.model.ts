import { Schema, model } from "mongoose";
import { TAcademicDepartment } from "./academicDepartment.interface";

const AcademicDepartmentSchema = new Schema<TAcademicDepartment>(
  {
    name: { type: String, required: true,unique:true },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref:'AcademicFaculty'
    }
  },
  {
    timestamps: true,
  }
);

export const academicDepartmentModel = model<TAcademicDepartment>(
  "AcademicDepartment",
  AcademicDepartmentSchema
);
