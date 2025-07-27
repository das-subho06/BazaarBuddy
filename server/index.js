import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

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
app.use((err, req, res, next) => {
    console.error(err.stack); // This will print any uncaught errors to your console
    res.status(500).json({ error: err.message || "Internal Server Error" });
});


app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/bazaarbuddy', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));


// Simple test route
app.get('/', (req, res) => {
    res.send('BazaarBuddy API is running!');
});

app.listen(PORT,()=>{
    connectDb();
    console.log(`Server is running ${PORT}`);
})
