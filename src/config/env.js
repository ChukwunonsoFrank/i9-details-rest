import dotenv from 'dotenv'
dotenv.config()

export default {
    environment: process.env.NODE_ENV || 3333,
    port: process.env.PORT || 3333,
}