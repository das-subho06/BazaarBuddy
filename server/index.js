import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import cookieParser from 'cookie-parser';
import { connectDb } from "./db/connectdb.js";
import authRoutes from "./router/auth.router.js";
dotenv.config();
export const app = express();

const PORT = process.env.PORT || 5000;
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
app.use(express.json());
app.use(cookieParser())
app.use("/api/auth",authRoutes);

app.listen(PORT,()=>{
    connectDb();
    console.log(`Server is running ${PORT}`);
})