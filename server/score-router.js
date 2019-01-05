const express = require('express');

const scoreModel = require('./score-model');
const asyncHandler = require('./asyncHandler');

const router = new express.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const scores = await scoreModel.readScore();

    res.append('Content-Type', 'application/json');
    res.json(scores);
    res.end();
  }),
);

router.post(
  '/',
  asyncHandler(async (req, res) => {
    const { userName, score } = req.body;
    await scoreModel.createNewScore({ userName, score });

    res.end();
  }),
);

module.exports = router;
