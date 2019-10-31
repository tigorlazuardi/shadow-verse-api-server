export default (err, req, res, next) => {
  let status = err.status || 500
  let message = err.message || 'Internal Server Error'
  res.status(status).json({ message })
}
