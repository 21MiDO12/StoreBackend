import { store_product , product} from "../models/product";
import { Request, Response, NextFunction } from "express";

const insertHandler = async (req: Request, res: Response, next: NextFunction) =>
{
    let pro : product = {pname:""};

    pro.pname = req.query.name as string;
    
    if (req.query.cost !== undefined)
    {
        const cost = parseFloat((req.query.cost as unknown) as string);
        pro.cost = cost;
    }

    const result = await store_product.insert(pro);

    if (!result)
        return res.status(402).send(`Can't insert ${pro}`);

    return res.status(200).json(pro).send();

    next();
}

export {insertHandler}