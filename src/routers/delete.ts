import { Router } from "express";
import { idValidator } from "../middleware/validateID";
import { deleteHandler } from "../handlers/deleteHandler";

const deleteRouter = Router();

deleteRouter.delete("/",idValidator,deleteHandler);

export {deleteRouter}