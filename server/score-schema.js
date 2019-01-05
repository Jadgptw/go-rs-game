const mongoose = require('mongoose');

const { Types } = mongoose.Schema;

const ScoreSchema = new mongoose.Schema({
  userName: Types.String,
  score: Types.String,
});

module.exports = ScoreSchema;
