const router = require('express').Router();
const apiRout = require('./api');

router.use('/api', apiRout);
module.exports = router;


