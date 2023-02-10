import { Request,Response } from "express";
import { usersType,usersModel } from "../models/users";

export const loginHandler = async (req: Request,res: Response) =>
{
    const user : usersType = {user:req.query.user as string,pass: req.query.pass as string}

    try
    {
        return res.status(200).send(await usersModel.auth(user));
    }
    catch (err)
    {
        return res.status(401).send("User Unauthorized");
    }
}