const router = require('express').Router();
const { Activities } = require('../../models/Activities');
const withAuth = require('../../utils/auth');

// GET all activity
router.get('/', withAuth, async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/home');
    } else {

    } try {
      // Get all activites, sorted by ascending location
      const activityData = await Activities.findAll({
          order: [['location', 'ASC']],
      });
  
      const activities = activityData.map((project) => project.get({ plain: true }));
  
      res.render('homepage', { users });
    } catch (err) {
      res.status(500).json(err);
    }
  });

// GET user specified activities
router.get('/', withAuth, async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/home');
    } else {

    } try {
        // TODO: Add route to return activities based on checkboxes
        const userActivityData = await Activities.find( ({ DBITEM }) => VALUE === 'VALUE' );

        const userActivites = userActivityData.map((activity) => activity.get({ plain: true }));

        res.render('home', { users });
    } catch (err) {
        res.status(500).json(err);
    }
});

// CREATE a new activity
router.post('/', withAuth, async (req,res) => {
    // try {
    //     const newActivity = await Activity.create({
    //         ...req.body,
            
    //     })
    // }
    //TODO Logic here is incomplete
})



module.exports = router;