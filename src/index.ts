import express from "express";
import dotenv from "dotenv";

console.log((__dirname + "/../.env"));
dotenv.config({path : __dirname + "/../.env"})

const app = express();
const port = process.env.port;

app.listen(port,()=>
{
    console.log(`Server Launched on http://localhost:${port}`);
})