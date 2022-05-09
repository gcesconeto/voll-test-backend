const express = require('express');

const { sale, auth } = require('../../middlewares');

const router = express.Router({ mergeParams: true });

router.use(auth);
router.post('/create', sale.create, require('./create'));
router.get('/list', require('./list'));
router.get('/:saleId', require('./getById'));

module.exports = router;
