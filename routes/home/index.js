const router = require('express').Router();
const withAuth = require('../../utils/auth');


router.post('/home', async (req,res) => {
    res.render('home')
});

router.post('/results', async (req,res) => {
    res.render('results')
});

router.post('/dashboard', async (req,res) => {
    res.render('dashboard')
});

module.exports = router;