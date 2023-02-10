import { Request,Response } from "express";
import { store_product } from "../models/product";

const deleteHandler = async (req: Request, res: Response) =>
{
    const id = parseInt((req.query.id as unknown) as string);

    if (isNaN(id))
    {
        return res.status(406).send("Bad Request");
    }
    
    const result = await store_product.delete(id);

    if (result)
        return res.status(200).send(`${id} is deleted successfully`);
    else
        return res.status(500).send("Server Error, Can't Delete");
}

export {deleteHandler}