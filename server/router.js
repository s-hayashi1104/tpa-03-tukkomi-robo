const express = require('express');
const getRandomTukkomi = require('./get-random-tukkomi');

const tukkomiRoboRouter = express.Router();

tukkomiRoboRouter.get('/', (req, res) => {
  const { phrase } = req.query;
  console.log('phrase = ', phrase);
  if(!phrase) {
    const empty = '何も突っ込めんやんかい！なんかいえや！';
    res.send(empty);
  }else {
    const tukkomi = getRandomTukkomi();
    res.send(tukkomi);
  }
});

module.exports = tukkomiRoboRouter;
