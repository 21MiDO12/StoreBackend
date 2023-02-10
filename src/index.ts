import express from "express";
import { indexRouter } from "./routers";
import { showRouter } from "./routers/show";
import { insertRouter } from "./routers/insert";
import { deleteRouter } from "./routers/delete";
import { updateRouter } from "./routers/update";
import { usersRouter } from "./routers/users";
import { login } from "./routers/login";
import { usersListRouter } from "./routers/userList";

const app = express();
const port = process.env.port;

app.use("/index",indexRouter);
app.use("/show",showRouter);
app.use("/insert",insertRouter);
app.use("/delete",deleteRouter);
app.use("/update",updateRouter);
app.use("/createUser",usersRouter);
app.use("/login",login);
app.use("/users",usersListRouter);

app.listen(port,()=>
{
    console.log(`Server Launched on http://localhost:${port}`);
})