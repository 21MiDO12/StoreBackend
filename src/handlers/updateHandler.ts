import { Request,Response } from "express";
import { product, store_product } from "../models/product";

const updateHandler = async (req: Request, res: Response) =>
{
    let pro : product = {pname: req.query.name as string};
    pro.id = parseInt((req.query.id as unknown) as string);

    if (req.query.cost !== undefined)
        pro.cost = parseFloat((req.query.cost as unknown) as string);

    if (isNaN(pro.id as number))
    {
        return res.status(406).send("Bad Request, Invalid id");
    }

    const result = await store_product.update(pro);

    if (result)
        return res.status(200).send(`${pro} Updated`);
    
    return res.status(500).send(`Can't Update ${pro}`);

}

export {updateHandler}