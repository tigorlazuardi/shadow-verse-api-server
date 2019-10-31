import express from 'express'
import cards from './cards'

const Router = express.Router()

Router.get((req, res, next) =>
  res.status(200).json({ message: 'connected to Server' })
)

Router.use('/cards', cards)

Router.use('/*', (req, res) =>
  res.status(404).json({ message: 'API Route Not Found' })
)

export default Router
