const router = require('express').Router();
const User = require('../../models/User');

// CREATE a new user
router.post('/signup', async (req, res) => {
    try {
      const userData = await User.create({
        email: req.body.email,
        password: req.body.password,
      });

      req.session.save(() => {
          req.session.loggedIn = true;

          res.status(200).json(userData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

  // TODO: Add more routes based on any additional functionality (delete, update..)

  module.exports = router;