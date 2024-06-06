const { Router } = require('express');
const data = require('../seed');
const router = Router();

router.get('/get-code/:type', async (req, res) => {
  const randomAll = data[Math.floor(Math.random() * data.length)];

  if (req.params.type === '0') {
    res.send(randomAll);
    return;
  }

  const found = data.filter((x) => {
    return x.type === parseInt(req.params.unit);
  });
  const random = found[Math.floor(Math.random() * found.length)];

  res.send(random);
});

module.exports = router;
