import dotenv from "dotenv"
import {Pool} from "pg"

dotenv.config()

var data = {
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD
}


if (process.env.type === 'test')
{
    data.database = process.env.POSTGRES_DB_TEST
}

const connector = new Pool({
    host: data.host,
    database: data.database,
    user: data.user,
    password: data.password
})

export {connector}
export const pepper = process.env.pepper
export const rounds = process.env.SALT_ROUNDS