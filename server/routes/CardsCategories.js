const router = require('express').Router();
const { Products } = require('../db/models');

router.get('/category/:id', (req, res) => {
  const data = Products.find((el) => el.id === Number(req.params.id));
  if (data) {
    return res.json(data);
  }
  res.json([]);
});

module.exports = router;
