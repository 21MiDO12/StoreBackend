import { connector,pepper,rounds } from "../modules/database";
import { hashSync, compareSync } from "bcrypt";
import { sign } from "jsonwebtoken";


export type usersType =
{
    id? : number;
    user : string;
    pass : string;
}

export class usersModel
{
    static async createUser (user:usersType) : Promise<boolean>
    {
        try
        {
            const conn = connector.connect();

            const pass = hashSync(user.pass + pepper , parseInt(rounds as string));

            const result = (await conn).query("INSERT INTO users (username,pass) VALUES ($1,$2);",[user.user,pass]);
            
            console.log(`Inserted ${user.user} and ${pass}`);
            (await conn).release();
            return true;
        }
        catch (err)
        {
            console.error(`Can't create user ${user.user}`);
            return false;
        }
    }

    static async auth (user:usersType) : Promise<string>
    {
        try
        {
            const conn = connector.connect();
            const result = (await conn).query("SELECT pass FROM users WHERE username = $1",[user.user]);

            if ((await result).rowCount > 0)
            {
                if (compareSync(user.pass + pepper , (await result).rows[0].pass))
                {
                    return sign(user.user,process.env.Secret as string);
                }

                return Promise.reject();
            }
            else
            {
                
                (await conn).release();
                return Promise.reject();
            }
        }
        catch (err)
        {
            console.error(`Can't check ${user.user} because ${err}`);
            return Promise.reject();
        }
    }

    static async listUsers (): Promise<usersType[]>
    {
        try
        {
            const conn = connector.connect();

            const result = (await conn).query("SELECT username,pass FROM users");
            
            (await conn).release();
            return (await result).rows;
        }
        catch (err)
        {
            console.error(`Can't list users`);
            return Promise.reject();
        }
    }
}