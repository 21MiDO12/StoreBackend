import { Router } from "express";
import { userCreator } from "../handlers/createUserHandler";
import { userValidator } from "../middleware/validateUser";

const usersRouter = Router();

usersRouter.post("/", userValidator, userCreator);

export {usersRouter};