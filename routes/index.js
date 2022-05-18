const router = require('express').Router();
const usersRouters = require('./userRoutes');
const thoughtsRoutes = require('./thoughtRoutes');

router.use('/user', usersRouters);
router.use('/thought', thoughtsRoutes);

module.exports = router;
