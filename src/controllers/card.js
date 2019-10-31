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
}

export default CardController
