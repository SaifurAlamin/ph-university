import { Types } from "mongoose";

export type GUrdian ={
    fatherName: string;
    fatherNumber: string;
    motherName: string;
    motherNumber: string;
}

export type Student = {
    id:string;
    user: Types.ObjectId,
    name: {
        firstName:string;
        lastName:string;
    },
    gender:'male' | 'female'|'other';
    contactNumber? : string;
    email?: string;
    dateOfBirth: string;
    gurdian : GUrdian;
    bloodGroup: 'A+'| 'B+' | 'O+';
    profileImg?: string;
   
  }