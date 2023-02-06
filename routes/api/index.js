const router = require('express').Router();
const applicationRoute = require('./applicationRouts');
const credentialsRoute = require('./credentialsRout');

router.use('/applicant', applicationRoute);
router.use('/cred', credentialsRoute);




module.exports = router;