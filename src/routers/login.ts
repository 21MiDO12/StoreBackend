import { Router } from "express";
import { userValidator } from "../middleware/validateUser";
import { loginHandler } from "../handlers/loginHandler";

const login = Router();

login.post("/",userValidator,loginHandler);

export {login};