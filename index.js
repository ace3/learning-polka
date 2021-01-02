const polka = require('polka')
const { logger } = require('./middlewares/loggerMiddleware')
const cors = require('cors')
const app = polka()
const info = require('./routes/info')
app.use(logger)
app.use(cors())
app.use('/info', info)
app.get('/', (req, res) => {
  res.end('Hello World')
})

app.listen(3000)
