import dotenv from "dotenv";
import connectDB from "./db/dbConnect.js";
import { app } from "./app.js";

dotenv.config({
    path : './env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 3000, ()=>{
        console.log(`Server is running successfully at PORT: ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("Mongo db connection Failed !!!!", error);
})