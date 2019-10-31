import axios from 'axios'
import Card from '../models/card'

class CardController {
  static async updateDatabase(req, res, next) {
    try {
      const {
        data: {
          data: { cards },
        },
      } = await axios({
        method: 'get',
        url: 'https://shadowverse-portal.com/api/v1/cards?format=json&lang=en',
        timeout: 30000,
      })
      await Card.deleteMany({})
      await Card.insertMany(cards)
      res.status(200).json({ message: 'Database updated' })
    } catch (error) {
      next(error)
    }
  }

  static async getCards(req, res, next) {
    try {
      const { q = '', _limit = 18, _page = 1 } = req.query
      const offset = (_page - 1) * _limit
      let search = {
        $or: [
          { card_name: new RegExp(q, 'ig') },
          { description: new RegExp(q, 'ig') },
          { evo_description: new RegExp(q, 'ig') },
          { skill_disc: new RegExp(q, 'ig') },
          { evo_skill_disc: new RegExp(q, 'ig') },
        ],
      }
      let cards = await Card.find(search)
        .limit(Number(_limit))
        .skip(offset)
      let count = await Card.count(search)
      res.setHeader('x-total-count', count)
      res.status(200).json(cards)
    } catch (error) {
      next(error)
    }
  }

  static async getOneCard(req, res, next) {
    try {
      const id = req.params.id
      const card = await Card.findOne({ card_id: id })
      if (!card) return next({ status: 404, message: 'Card Not Found' })
      res.status(200).json(card)
    } catch (error) {
      next(error)
    }
  }
}

export default CardController
