import { Router } from "express";
import { insertRequestValidator } from "../middleware/validateInsertRequest";
import { insertHandler } from "../handlers/insertHandler";
import { tokenVerifier } from "../middleware/verifyLogin";

const insertRouter = Router();

insertRouter.post("/",tokenVerifier,insertRequestValidator,insertHandler);

export {insertRouter}