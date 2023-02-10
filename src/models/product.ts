import { connector } from "../modules/database";

export type product =
{
    id? : Number;
    pname : string;
    cost? : Number;
}

export class store_product
{
    static async index (): Promise<product[]>
    {
        try
        {
            const conn = connector.connect();
            const result = (await conn).query("SELECT * FROM PRODUCT;");
            (await conn).release;

            return (await result).rows;
        }
        catch(err)
        {
            console.error("Can't get Products");
            return Promise.reject(err);
        }
    }

    static async show (id:Number): Promise<product>
    {
        try
        {
            const conn = connector.connect();
            const result = (await conn).query(`SELECT * FROM PRODUCT WHERE id = $1`,[id]);
            (await conn).release();

            return (await result).rows[0];
        }
        catch(err)
        {
            console.error(`Can't get ${id} because of ${err}`);
            return Promise.reject(err);
        }
    }

    static async insert (pro:product): Promise<boolean>
    {
        try
        {
            const conn = connector.connect();
            const result = (await conn).query(`INSERT INTO product (pname,cost) VALUES ($1,$2)`,[pro.pname,pro.cost]);
            (await conn).release();

            return true;
        }
        catch(err)
        {
            console.error(`Can't Insert ${pro.pname} because of ${err}`);
            return false;
        }
    }

    static async delete (id:Number): Promise<boolean>
    {
        try
        {
                
            const conn = connector.connect();
            const result = (await conn).query("DELETE FROM product WHERE id = $1",[id]);

            (await conn).release();
            return true;
        }
        catch (err)
        {
            console.error(`Can't Delete ${id} because of ${err}`);
            return false;
        }
    }

    static async update(pro:product): Promise<boolean>
    {
        try
        {
            const conn = connector.connect();
            const result = (await conn).query("UPDATE product SET pname = $2 , cost = $3 WHERE id = $1",[pro.id,pro.pname,pro.cost]);

            (await conn).release();
            return true;
        }
        catch (err)
        {
            console.error(`Can't Update ${pro.id} because of ${err}`);
            return false;
        }
    }

    static async checkID(id: Number): Promise<boolean>
    {
        try
        {
            const conn = connector.connect();
            const result = (await conn).query("SELECT id FROM product WHERE id = $1",[id]);

            (await conn).release();
            return (await result).rowCount > 0
        }
        catch (err)
        {

            console.error(err);
            return false;
        }
    }
}