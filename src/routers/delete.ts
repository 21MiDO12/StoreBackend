import { Router } from "express";
import { idValidator } from "../middleware/validateID";
import { deleteHandler } from "../handlers/deleteHandler";
import { tokenVerifier } from "../middleware/verifyLogin";

const deleteRouter = Router();

deleteRouter.delete("/",tokenVerifier,idValidator,deleteHandler);

export {deleteRouter}