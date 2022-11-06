function handlerErrorGlobal(err, req, res, next) {
  res.status(err.status || 500)
  res.json({
    message: err.message || 'Internal server error',
    stack: err.status || '500',
    description: err.description
  })
}

module.exports = {
  handlerErrorGlobal
}

// Los middleware se definen despues del routing