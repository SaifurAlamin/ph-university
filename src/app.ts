import express, {
  Application,
  NextFunction,
  Request,
  Response,
  Router,
} from "express";
import cors from "cors";
import { studentsRoute } from "./app/modules/student/student.router";
import { userRoute } from "./app/modules/user/user.route";
const app: Application = express();
// const port = 3000

//parser
app.use(express.json());
app.use(cors());

// application Route
app.use("/api/v1/students", studentsRoute);
app.use("/api/v1/users", userRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// global error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  return res.status(500).json({
    success: false,
    message: err.message || "something went wrong",
    error: err,
  });
});
export default app;
