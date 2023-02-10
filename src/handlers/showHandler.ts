import { store_product } from "../models/product";
import { Request,Response,NextFunction } from "express";

const showHandler = async (req: Request,res:Response, next:NextFunction) =>
{
    const id = parseInt((req.query.id as unknown) as string);
    return res.json(await store_product.show(id)).send();
}

export {showHandler}