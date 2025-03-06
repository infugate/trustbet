const express = require('express');
const router = express.Router();
const ApiController = require('../controllers/ApiController');
const userController = require('../controllers/userController');
// Define routes

router.get('/api/sports-data-2', ApiController.getAllData);
router.get('/api/users/admin', ApiController.getAllAdminUser);

router.put('/api/users/admin/:userId', ApiController.updateUser);

module.exports = router;