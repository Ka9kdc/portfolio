const router = require('express').Router();
const { workHistory } = require('./data');

module.exports = router;

router.get('/work', (req, res, next) => {
  res.send(workHistory);
});
