import { verify } from "jsonwebtoken";
import { Request,Response,NextFunction } from "express";

export const tokenVerifier = (req: Request, res: Response, next:NextFunction) =>
{
    if (req.query.token === undefined)
    {
        return res.status(401).send("Unauthorized");
    }

    try
    {
        verify(req.query.token as string,process.env.Secret as string)
        next();
    }
    catch(err)
    {
        return res.status(401).send("Unauthorized");
    }
}