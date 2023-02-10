import express from "express";
import { indexRouter } from "./routers";
import { showRouter } from "./routers/show";
import { insertRouter } from "./routers/insert";
import { deleteRouter } from "./routers/delete";
import { updateRouter } from "./routers/update";

const app = express();
const port = process.env.port;

app.use("/index",indexRouter);
app.use("/show",showRouter);
app.use("/insert",insertRouter);
app.use("/delete",deleteRouter);
app.use("/update",updateRouter)

app.listen(port,()=>
{
    console.log(`Server Launched on http://localhost:${port}`);
})