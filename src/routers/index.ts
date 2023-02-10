import { Router } from "express";
import { index } from "../handlers/indexHandler";
import { tokenVerifier } from "../middleware/verifyLogin";

const indexRouter = Router();

indexRouter.get("/",tokenVerifier,index);

export {indexRouter}