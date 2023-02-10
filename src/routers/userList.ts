import { Router } from "express";
import { userLister } from "../handlers/listUser";

export const usersListRouter = Router();

usersListRouter.get("/", userLister);