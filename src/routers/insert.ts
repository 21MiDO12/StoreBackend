import { Router } from "express";
import { insertRequestValidator } from "../middleware/validateInsertRequest";
import { insertHandler } from "../handlers/insertHandler";

const insertRouter = Router();

insertRouter.post("/",insertRequestValidator,insertHandler);

export {insertRouter}