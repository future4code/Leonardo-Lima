import knex from 'knex'
import dotenv from 'dotenv'


dotenv.config()

const connection = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user:process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        database:process.env.DB_NAME
    }
})


async function showActor() : Promise <void> {
    try {
     const result =   await connection
     .select("*")
     .from("Actor")

     console.log(result)
        
    } catch(error) {
        console.log(error)
    }
}

showActor()