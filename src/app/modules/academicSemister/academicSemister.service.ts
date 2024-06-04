import { TAcademicSemister } from "./academicSemister.interface";
import { academicSemisterModel } from "./academicSemister.model";

//createSemister
const createAcademicSemisterIntoDb = async (payload: TAcademicSemister) => {
  // == model e prehook na koreo akane amne same semister r same yr er data atkano jay==
  // const existingSemister = await academicSemisterModel.findOne({ name: payload.name, year: payload.year });
  // if (existingSemister) {
  //   throw new Error(`Academic semester with name ${payload.name} for the year ${payload.year} already exists.`);
  // }

  const result = await academicSemisterModel.create(payload);
  return result;
};

//getAllSemister
const getAllAcademicSemister = async () => {
  const result = await academicSemisterModel.find()
  return result;
}

//singleAcademicSemister
const getSingleAcademicSemister = async (id: string) => {
  const result = await academicSemisterModel.findOne({ _id: id })
  return result;
}
//updateAcademicSemister
const updateAcademicSemister = async (id: string, payload: Partial<TAcademicSemister>) => {

  const result = await academicSemisterModel.findOneAndUpdate({ _id: id }, payload, { new: true })
  return result;
}

export const academicSemisterServices = {
  createAcademicSemisterIntoDb,
  getAllAcademicSemister,
  getSingleAcademicSemister,
  updateAcademicSemister
};
