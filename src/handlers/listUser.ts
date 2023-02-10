import { Request,Response } from "express";
import { usersModel } from "../models/users";

export const userLister = async (req:Request, res:Response) =>
{
    return res.json(await usersModel.listUsers()).send();
}