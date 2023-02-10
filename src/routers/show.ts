import { Router } from "express";
import { idValidator } from "../middleware/validateID";
import { showHandler } from "../handlers/showHandler";

const showRouter = Router();

showRouter.get("/",idValidator,showHandler);

export {showRouter}