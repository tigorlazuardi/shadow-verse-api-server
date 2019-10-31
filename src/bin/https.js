import https from 'https'
import app from '../app'
import fs from 'fs'
const SECURE_PORT = process.env.SECURE_PORT || 443
const DOMAIN = process.env.DOMAIN

const options = {
  cert: fs.readFileSync(`/etc/letsencrypt/live/${DOMAIN}/fullchain.pem`),
  key: fs.readFileSync(`/etc/letsencrypt/live/${DOMAIN}/privkey.pem`),
}

const server = https.createServer(options, app)

server.listen(SECURE_PORT, () =>
  console.log('HTTPS server listening on port ' + SECURE_PORT)
)
