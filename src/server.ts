import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

// console.log(process.env.DATABASE_URL)
// console.log(process.env.PORT)
// console.log(config)
async function main() {
  try {
   await mongoose.connect(config.databaseUrl as string);
    app.listen(config.port, () => {
      console.log(`App is listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main()
