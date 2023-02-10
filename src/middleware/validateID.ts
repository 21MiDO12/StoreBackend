import { Request, Response, NextFunction } from "express";
import { store_product } from "../models/product";

const idValidator = async (req: Request, res: Response, next: NextFunction) =>
{

    if (req.query.id === undefined)
        return res.status(406).send("Bad Request, Please Set id = Number");
    
    const id = parseInt((req.query.id as unknown) as string);

    if (isNaN(id))
        return res.status(406).send("Bad Request, Please Set id = Number");

    if (! await store_product.checkID(id))
        return res.status(406).send(`${id} is not inserted or maybe deleted`);

    next();
}

export {idValidator}