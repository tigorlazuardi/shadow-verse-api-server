import mongoose from 'mongoose'

const url = process.env.MONGO_DB

const options = {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

export default mongoose
  .connect(url, options)
  .then(() => console.log('Connected to MongoDB: ' + url))
  .catch(console.error)
