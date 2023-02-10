import dotenv from "dotenv"
import {Pool} from "pg"

dotenv.config()

var data = {
    host: process.env.host,
    database: process.env.databaseTest,
    user: process.env.user,
    password: process.env.password
}


if (process.env.type === 'test')
{
    data.database = process.env.database
}

const connector = new Pool({
    host: data.host,
    database: data.database,
    user: data.user,
    password: data.password
})

export {connector}