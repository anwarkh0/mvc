import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
dotenv.config()

export const sequelize = new Sequelize(
    process.env.DATA_NAME,
    process.env.DATA_USERNAME,
    process.env.DATA_PASSWORD,
    {
        host: process.env.DATA_HOST,
        dialect: "mysql",
    }
);
export const connect = async () => {
    try {
        await sequelize.authenticate()
        console.log("connect to database")

    } catch (err) {
        console.log("did not connect", err)
    }
}

export const syncronise = async () => {
    try {
        await sequelize.sync().then((result) => {
            console.log(result)
        })

    } catch (err) {
        console.log(err)
    }
}