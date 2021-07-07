const repo = require("./repository");
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

// Get route to display HTML form
router.get("/add", (req, res) => {
  res.send(`
    <div>
      <form method='POST'>
        <div>
          <div>
            <label id='location'>Where are you?</label>
          </div>
          <input type='text' name='location' 
                    placeholder='Seattle' 
          for='userLocation'>
        </div>
 
        <div>
          <div>
            <label id='weather'>Is the weather nice?</label>
            <div class="switch-field">
            <input type="radio" id="radio-one" name="weather" value="yes" checked/>
            <label for="radio-one">Yes</label>
            <input type="radio" id="radio-two" name="weather" value="no" />
            <label for="radio-two">No</label>
          </div>
        </div>

      <div>
      <div>
        <label id='hunger'>Are you hungry or thirsty?</label>
        <div class="switch-field">
        <input type="radio" id="radio-three" name="hunger" value="yes" checked/>
        <label for="radio-three">Yes</label>
        <input type="radio" id="radio-four" name="hunger" value="no" />
        <label for="radio-four">No</label>
      </div>
    </div>

    <div>
    <div>
      <label id='active'>Are you feeling active?</label>
      <div class="switch-field">
      <input type="radio" id="active" name="active" value="yes" checked/>
      <label for="radio-one">Yes</label>
      <input type="radio" id="radio-two" name="active" value="no" />
      <label for="radio-two">No</label>
    </div>
  </div>
      
        <div>
          <button>Post!</button>
        </div>
      </form>
    </div>
  `);
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