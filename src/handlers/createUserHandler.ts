import { Request,Response } from "express";
import { usersType,usersModel } from "../models/users";

export const userCreator = async (req: Request,res: Response) =>
{
    const user : usersType = {user:req.query.user as string,pass: req.query.pass as string}

    if (await usersModel.createUser(user))
    {
        return res.status(200).send("User Created");
    }

    return res.status(500).send("Can't create user");
}