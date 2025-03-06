const Bet = require('../models/betModel');
const User_Wallet = require('../models/Wallet'); 
const User = require('../models/UserSignUp');  
const mongoose = require('mongoose');


exports.placeBet = async (req, res) => {
  try {
    const { label, odds, stake, profit, userId } = req.body;
    // Validate input
    if (!label || !odds || !stake || !profit || !userId || stake <= 0) {
      return res.status(400).json({
        success: false,
        message: 'Invalid input: all bet details are required and stake must be greater than 0',
      });
    }
    const userWallet = await User_Wallet.findOne({ user: userId });
    if (!userWallet) {
      // console.error("Wallet not found for user:", userId);
      return res.status(404).json({ success: false, message: 'Wallet not found' });
    }
    // console.log("User wallet found:", userWallet);
    if (userWallet.balance < stake) {
      console.error("Insufficient balance. Current balance:", userWallet.balance, "Stake:", stake);
      return res.status(400).json({ success: false, message: 'Insufficient balance' });
    }

    userWallet.balance -= stake;

    await userWallet.save();
    // console.log("Updated wallet balance:", userWallet.balance);
    const newBet = new Bet({
      user: userId, 
      label,
      odds,
      stake,
      profit,
    });

    // Save the bet
    const savedBet = await newBet.save();
    // console.log("Bet saved successfully:", savedBet);

    res.status(201).json({
      success: true,
      message: 'Bet placed successfully',
      bet: savedBet,
      updatedWallet: userWallet.balance,
    });
  } catch (err) {
    console.error('Error placing bet:', err);
    res.status(500).json({ success: false, message: 'Error placing bet', error: err.message });
  }
};




exports.getUserBets = async (req, res) => {
  const { userId } = req.params; 
  try {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid user ID',
      });
    }
    const bets = await Bet.find({ user: new mongoose.Types.ObjectId(userId) });
    if (!bets || bets.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No bets found for this user',
      });
    }
   res.status(200).json({
      success: true,
      bets,
    });
  } catch (err) {
    console.error('Error fetching bets:', err);
    res.status(500).json({
      success: false,
      message: 'Error fetching bets',
    });
  }
};






exports.updateWallet = async (req, res) => {
  const { userId, amount } = req.body;

  try {
      // Find the user by ID
      const userWallet = await User_Wallet.findOne({ user: userId });
      if (!userWallet) {
          return res.status(404).json({ success: false, message: "User not found" });
      }

      // Update the wallet balance
      userWallet.balance += amount;
      await userWallet.save();

      res.json({ success: true, message: "Wallet updated successfully", walletBalance: user.walletBalance });
  } catch (error) {
      console.error("Error updating wallet:", error);
      res.status(500).json({ success: false, message: "Server error" });
  }
};
