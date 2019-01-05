const mongoose = require('mongoose');

const ScoreSchema = require('./score-schema');

const ScoreModel = mongoose.model('Score', ScoreSchema);

module.exports.readScore = async function readScore() {
  const score = await ScoreModel.find({}).exec();

  return score;
};

module.exports.createNewScore = async function createNewScore({ userName, score }) {
  const result = await ScoreModel.create({
    userName,
    score,
  });

  return result;
};
