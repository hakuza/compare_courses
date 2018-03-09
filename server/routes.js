const controller = require('./controllers');
const router = require('express').Router();

router.get('/', controller.compare.get);

module.exports = router;
