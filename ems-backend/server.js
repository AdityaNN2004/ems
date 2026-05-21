const  express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
dotenv.config()
const PORT = process.env.PORT
const cors = require('cors')
const connectDB= require('./src/config/db')
const deptRouter = require('./src/routes/deptRoute')
const empRouter = require('./src/routes/empRoute')
const projectRouter = require('./src/routes/projectRoute')
const attendanceRouter = require('./src/routes/attendanceRouter.js')
const fs = require('fs')
const path = require('path')

const app = express()
app.use(express.json())
app.use(cors())
connectDB()

const accessLogStream = fs.createWriteStream(
    path.join(__dirname,'./src/logging/access.log'),
    {    flags:'a'}
)
app.use(morgan("combined",{stream:accessLogStream}))
app.use('/dept',deptRouter)
app.use('/emp',empRouter)
app.use('/project',projectRouter)
app.use('/attendance',attendanceRouter)

app.get('/', (req, res) => res.send('Hello World !'))
app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`))