const { Router } = require('express');
const data = require('../seed');
const router = Router();
const Snippet = require('../models/Snippet.js');

router.get('/get-code/:type', async (req, res) => {
  if (req.params.type === 'all') {
    const randomAll = await Snippet.findRandom();

    res.send(randomAll);
    return;
  }

  const random = await Snippet.findRandomByType(req.params.type);

  res.send(random);
});

router.post('/seed', async (req, res) => {
  try {
    await Snippet.deleteMany({});

    const created = await Snippet.create(data);

    res.json(created);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
