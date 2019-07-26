const express = require('express');
const router =express.Router();

const items = require('../controllers/itemController');
const item = require('../controllers/itemIdController');

router.get('/items', items.getItems);
router.get('/items/:uniqueID', item.getItemsDetail);

// router.get('/items/:uniqueID', itemDetail.getItemsDetail);

module.exports = router;