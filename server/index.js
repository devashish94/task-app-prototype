const express = require('express')
const cors = require('cors')
const ip = require('ip')
const app = express()

const PORT = process.env.PORT || 8000;

const rootRouter = require('./routes/root-router')
const apiRouter = require('./routes/api-router')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use('/', rootRouter)
app.use('/api', apiRouter)
app.use('*', require('./controllers/notFoundReponse'));

app.listen(PORT, () => {
  console.log(
    `\nServer running at \n 
       Local: http://localhost:${PORT}/
       Network: http://${ip.address()}:${PORT}/
  `)
})
