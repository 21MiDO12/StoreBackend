import { Request,Response,NextFunction } from "express";

const insertRequestValidator = async (req: Request, res: Response, next: NextFunction) =>
{
    if (req.query.name === undefined || req.query.name.length == 0)
        return res.status(406).send("Bad Request, Please Set name");

    if (req.query.cost !== undefined)
    {
        const id = parseFloat((req.query.cost as unknown) as string );

        if (isNaN(id))
        {
            return res.status(406).send("Bad Request, Cost should be number");
        }
    }

    next();
}

export {insertRequestValidator}