export default (err, req, res, next) => {
  const NODE_ENV = process.env.NODE_ENV

  if (NODE_ENV === 'development' || NODE_ENV === 'test') {
    console.log(err.status, err.name, err.message)
  }

  res.status(err.status).json({ message: err.message })
}
