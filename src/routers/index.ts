import { Router } from "express";
import { index } from "../handlers/indexHandler";

const indexRouter = Router();

indexRouter.get("/",index);

export {indexRouter}