import dotenv from "dotenv"; //always at top
import connectDb from './db/db.js'
import app from "../../PrashantDevNht/findDb/app.js";

dotenv.config({
     path: './.env'
})

connectDb().then(() => {
     app.listen(process.env.PORT || 8000, () => {
          console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
     })
})
     .catch((err) => {
          console.log("MONGO db connection failed !!! ", err);
     })
