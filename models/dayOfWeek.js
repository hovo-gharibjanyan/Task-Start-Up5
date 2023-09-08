const { connectToDb, getDb } = require("../db.js");
let db;
connectToDb((error) => {
  if (!error) {
    db = getDb();
  }
});

module.exports = class dayOfWeek { 
     createDayOfWeek(req, res) { 
        const { dayOfWeek } = req.body;
        const day = { dayOfWeek }
        try { 
            db.collection("DayOfWeek").insertOne(day)
        } catch (error) { 
            res.status(505).json({error:"some error"})
        } 
        res.send("the req is added in db")
     }

     getDayOfWeeks(req, res) {
        try {
          db.collection("DayOfWeek")
            .find()
            .toArray()
            .then((result) => {
              res.status(200).json(result);
            })
            .catch((err) => {
              res.status(500).json({ error: "Some error occurred while fetching dayOfWeeks" });
            });
        } catch (error) {
          res.status(500).json({ error: "Some error occurred" });
        }
      }
}