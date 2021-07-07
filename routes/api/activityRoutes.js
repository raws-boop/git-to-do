const router = require('express').Router();
const { Activities } = require('../../models/Activities');
const withAuth = require('../../utils/auth');

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