import { store_product } from "../models/product";
import { Request,Response,NextFunction } from "express";

const index = async (req:Request,res:Response,next:NextFunction) =>
{
    const result = await store_product.index();

    return res.json(result).send();

    next();
}

export {index};