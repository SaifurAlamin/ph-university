export type TUser = {
  id: string;
  password: string;
  needPassChange: boolean;
  role: "admin" | "student" | "faculty";
  isDeleted: boolean;
  status: "in-progress" | "blocked";
};

export type NewUser = {
  role?: string;
  password?: string;
  id?: string;
};
