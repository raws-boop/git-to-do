const repo = require("./repository");
const router = require('express').Router();
const withAuth = require('../../utils/auth');

router.get('/', async (req,res) => {
    res.render('home')
});

router.post('/results', async (req,res) => {
    res.render('results')
});

router.post('/dashboard', async (req,res) => {
    res.render('dashboard')
});

// Get route to display HTML form
router.get("/add", (req, res) => {
  res.render("add")
});

// Post route to handle form submission
// logic and add data to the database
router.post("/add", async (req, res) => {
  const { location, weather, food, active } = req.body;
  console.log(req.body)

// }else if (button2.checked) {
//     alert("radio2 selected");
// }}};

//   const addedRecord = await repo.createNewRecord({
//     location,
//     weather,
//     food,
//     active,
//   });

  console.log(`Added Record : 
    ${JSON.stringify(addedRecord, null, 4)}`);

  res.send(
    "Your activity has been logged. It Looks like it's time to find more shit to do."
  );
});

module.exports = router;