import { TAcademicSemister } from "../academicSemister/academicSemister.interface";
import { userModel } from "./user.model";

const findStudentId = async () => {
    const lastStudent = await userModel.findOne(
        { role: "student" },
        { id: 1 })
        .sort({ createdAt: -1 })
        .lean()
    // console.log(lastStudent)
    //203003 akane 6 bade baki number ei id hobe tai substring
    return lastStudent?.id ? lastStudent.id : undefined;

}


export const generateStudentId = async (payload: TAcademicSemister) => {
    let currentId = (0).toString()
    const lastStudentId = await findStudentId()
    const lastStudentYear = lastStudentId?.substring(0, 4)
    const lastStudentCode = lastStudentId?.substring(4, 6)
    const currentStudentYear = payload.year
    const currentStudentCode = payload.code
    if (lastStudentId && lastStudentYear === currentStudentYear && lastStudentCode === currentStudentCode) {
        currentId = lastStudentId.substring(6)
    }
    const incrementId = (+currentId + 1).toString().padStart(4, '0')
    const academicId = `${payload.year}${payload.code}${incrementId}`
    return academicId;
}