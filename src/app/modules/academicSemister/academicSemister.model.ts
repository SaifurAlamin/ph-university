import { Schema, model } from "mongoose";
import { TAcademicSemister, TMonth } from "./academicSemister.interface";


export const Months: TMonth[] = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const AcademicSemisterSchema = new Schema<TAcademicSemister>({
  name: { type: String, required: true, enum: ['Autumn', 'Summer', 'Fall'] },
  year: { type: String, required: true },
  code: { type: String, required: true, enum: ['01', '02', '03'] },
  startMonth: { type: String, required: true, enum: Months },
  endMonth: { type: String, required: true, enum: Months },
},
  {
    timestamps: true
  }
);

AcademicSemisterSchema.pre('save', async function (next) {
  const existingSemister = await academicSemisterModel.findOne({
    name: this.name,
    year: this.year,
  });
  if (existingSemister) {
    const error = new Error('An academic semester with the same name and year already exists.');
    next(error);
  } else {
    next();
  }
});

export const academicSemisterModel = model<TAcademicSemister>('AcademicSemister', AcademicSemisterSchema)