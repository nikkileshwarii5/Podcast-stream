import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';



/**routes*/
import authRoutes from './routes/auth.js';
import podcastsRoutes from './routes/podcast.js';
import userRoutes from './routes/user.js';

dotenv.config();
const app = express();


/** Middlewares */
app.use(express.json());

const corsConfig = {
    origin: process.env.REACT_APP_FRONTEND_URL || 'https://gorgeous-baklava-ba8e11.netlify.app',
    methods: 'GET, POST, PUT, DELETE, OPTIONS', // Allow specific HTTP methods
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
   
};
app.use(cors(corsConfig));

//cors adjustment//
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://gorgeous-baklava-ba8e11.netlify.app");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});


const port = process.env.PORT || 8700;

const connect = () => {
    mongoose.set('strictQuery', true);
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log('MongoDB connected');
    }).catch((err) => {
        console.log(err);
    });
};


app.use(express.json())

// Route middlewares
app.use("/api/auth", authRoutes)
app.use("/api/podcasts", podcastsRoutes)
app.use("/api/user", userRoutes)

//error handling middlewares
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    return res.status(status).json({
        success: false,
        status,
        message
    })
})

app.listen(port, () => {
    console.log("Connected")
    connect();
})
