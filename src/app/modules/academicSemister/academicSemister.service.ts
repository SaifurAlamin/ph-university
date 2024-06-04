import { TAcademicSemister } from "./academicSemister.interface";
import { academicSemisterModel } from "./academicSemister.model";

const createAcademicSemisterIntoDb = async (payload: TAcademicSemister) => {
  console.log('payload', payload)
  const existingSemister = await academicSemisterModel.findOne({ name: payload.name, year: payload.year });
  if (existingSemister) {
    throw new Error(`Academic semester with name ${payload.name} for the year ${payload.year} already exists.`);
  }

  // If no existing record is found, create a new one
  const result = await academicSemisterModel.create(payload);
  return result;
};


export const academicSemisterServices = {
  createAcademicSemisterIntoDb,
};
