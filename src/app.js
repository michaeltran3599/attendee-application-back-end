const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const applicationRouter = require('./routers/application')
const emailRequestRouter = require('./routers/emailRequest')
const resumeRouter = require('./routers/resume')
const forgotPasswordRequestRouter = require('./routers/forgotPasswordRequest')
const morgan = require('morgan')
const app = express()
const cors = require('cors')

app.use(cors())

app.use(express.json())
app.use(morgan('combined'))
app.use(userRouter)
app.use(applicationRouter)
app.use(emailRequestRouter)
app.use(forgotPasswordRequestRouter)
app.use(resumeRouter)

module.exports = app
