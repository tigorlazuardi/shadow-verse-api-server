import express from 'express'
import cors from 'cors'
import routes from './routes'
import errorHandler from './middlewares/errorHandler'
import morgan from 'morgan'

import './config/mongoose'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))

app.use('/', routes)

app.use(errorHandler)

export default app
