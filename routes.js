const { Router } = require('express')

const route = Router({ mergeParams: true })

route.get('/v1/users/:id', (req, res, next) => {
  const { id } = req.params
  if (id === '1') {
    return res.status(200).json({ name: 'foo' })
  } else if (id === '2') {
    // this should be handled by user error handler
    return next(new Error('v1-users: User inactive'))
  }

  // this should be handled by "global" error handler
  return next(new Error('User not found'))
})

route.get('/v1/users', (req, res, next) => {
  return res.status(200).json([{name: 'foo'}, {name: 'bar'}])
})

route.use((err, req, res, next) => {
  if (/(v1\-users\:)(.*)/ig.test(err.message)) {
    return res.status(200).json({
      error: 'something wrong ' + err.message,
    })
  }

  return next(err)
})

module.exports = route
