const Express = require('express')

const app = Express()

app.get('/ping', (req, res, next) => {
  return res.json({ ok: true })
})

app.get('/throw-error', (req, res, next) => {
  next(new Error('Boom...'))
})

app.use(require('./routes'))

app.use((err, req, res, next) => {
  res.status(500).json({
    error: err.message
  })
})

app.listen(8989, () => {
  console.info('Server started at :8989')
})
