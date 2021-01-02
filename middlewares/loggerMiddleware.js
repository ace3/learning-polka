function logger(req, res, next) {
  console.log(`Accessing: ${req._parsedUrl.path}`)
  next()
}

module.exports = { logger }
