const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
dotenv.config()

const secret = process.env.SECRET
const salt = process.env.salt

