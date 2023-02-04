import express from "express";
import dotenv from "dotenv";

dotenv.config()

const app = express();
const port = process.env.port;

app.listen(port,()=>
{
    console.log(`Server Launched on http://localhost:${port}`);
})