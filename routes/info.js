const polka = require('polka')
const router = polka()
const { index } = require('../handlers/info')
router.get('/', index)

module.exports = router
