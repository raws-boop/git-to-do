const router = require('express').Router()
router.post('/', async (req, res) => {
    try {
      const userData = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        numberOfPets: req.body.numberOfPets,
      });
      res.status(200).json(userData);
    } catch (err) {
      res.status(400).json(err);
    }
  });