const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  multiplier: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Game', gameSchema);
