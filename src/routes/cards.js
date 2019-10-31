import express from 'express'
import CardController from '../controllers/card'
const Router = express.Router()

Router.get('/update', CardController.updateDatabase)
Router.get('/:id', CardController.getOneCard)
Router.get('/', CardController.getCards)

export default Router
