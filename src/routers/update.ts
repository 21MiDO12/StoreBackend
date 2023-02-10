import { Router } from "express";
import { idValidator } from "../middleware/validateID";
import { insertRequestValidator } from "../middleware/validateInsertRequest";
import { updateHandler } from "../handlers/updateHandler";

const updateRouter = Router();

updateRouter.put("/",idValidator,insertRequestValidator,updateHandler);

export {updateRouter}