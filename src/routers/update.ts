import { Router } from "express";
import { idValidator } from "../middleware/validateID";
import { insertRequestValidator } from "../middleware/validateInsertRequest";
import { updateHandler } from "../handlers/updateHandler";
import { tokenVerifier } from "../middleware/verifyLogin";

const updateRouter = Router();

updateRouter.put("/",tokenVerifier,idValidator,insertRequestValidator,updateHandler);

export {updateRouter}