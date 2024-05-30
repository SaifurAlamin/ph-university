import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";
import bcrypt from 'bcrypt';

const userSchema = new Schema<TUser>({
  id: {
    type: String,
    required: true,
    // unique: true
  },
  password: {
    type: String,
    required: true,
  },
  needPassChange: {
    type: Boolean,
    default: true,
  },
  role: {
    type: String,
    enum: ['admin', 'student', 'faculty']
  },
  status: {
    type: String,
    enum: ['in-progress', 'blocked'],
    default: 'in-progress'
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
},
  {
    timestamps: true
  }
);

// password ke hashing korar jonno  'bycrypt' use kore r ata kore 'pre' midleware/hook(mongose) diye r 'save' hoccce akta event er nam .
userSchema.pre('save', async function (next) {
  const user = this;
  const salt = await bcrypt.genSalt(10); // ayta 'persian bhai' .evn te kore but ami chatgpt theke anci
  user.password = await bcrypt.hash(user.password, salt)
  next()
})

export const userModel = model<TUser>('User', userSchema)