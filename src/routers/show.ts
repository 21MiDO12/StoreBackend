import { Router } from "express";
import { idValidator } from "../middleware/validateID";
import { showHandler } from "../handlers/showHandler";
import { tokenVerifier } from "../middleware/verifyLogin";

const showRouter = Router();

showRouter.get("/",tokenVerifier,idValidator,showHandler);

export {showRouter}