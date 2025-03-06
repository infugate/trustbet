const express = require('express');
const router = express.Router();
const betController = require('../controllers/betController');

// Define routes
router.post('/api/bets', betController.placeBet);
router.get('/api/bets/:userId', betController.getUserBets);
router.post('/wallet/update',betController.updateWallet);

// router.delete('/api/bets', betController.resetBets);

module.exports = router;
