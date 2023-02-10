import { Request,Response, NextFunction } from "express";

const userValidator = (req: Request, res: Response, next:NextFunction) =>
{
    
    if (req.query.user === undefined || req.query.pass === undefined)
    {
        return res.status(401).send("Please set user and pass");
    }

    if ((req.query.user as string ).length <= 0)
    {
        return res.status(401).send("Please set non empty user");
    }

    next();
}

export {userValidator}