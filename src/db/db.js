import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb = async () => {
     try {
          const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
          console.log(`\n Connected !! DB HOST: ${connection.connection.host}`);

     } catch (err) {
          console.error("error:", err)
          process.exit(1)
     }
}

export default connectDb;


