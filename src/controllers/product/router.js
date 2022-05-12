const express = require('express');

const { auth, product } = require('../../middlewares');

const router = express.Router({ mergeParams: true });

router.use(auth);
router.get('/list', require('./list'));
router.post('/create', product.create, require('./create'));

module.exports = router;
