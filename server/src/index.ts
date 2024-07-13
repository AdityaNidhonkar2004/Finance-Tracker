import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";
import cors from "cors";
import path, { dirname } from "path" 
const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname,"dist")))
console.log(path.join(__dirname,"dist"));
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"dist/index.html"))
})
const mongoURI: string="mongodb+srv://adityanidhonkar2004:yD4cV35UtC94s3gE@moneymate.igx9sct.mongodb.net/"
mongoose
  .connect(mongoURI)
  .then(() => console.log("CONNECTED TO MONGODB!"))
  .catch((err) => console.error("Failed to Connect to MongoDB:", err));

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});
