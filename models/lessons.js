const { connectToDb, getDb } = require("../db.js");
let db;
connectToDb((error) => {
  if (!error) {
    db = getDb();
  }
});

module.exports = class lesson { 
    createLesson(req, res) { 
        const { lessonName } = req.body;
        const lesson = { lessonName }
        try { 
            db.collection("Lesson").insertOne(lesson)
        } catch (err) { 
            res.status(500).json({err: 'some error'})
        }
        res.send('its oke')
    }

    getLessons(req, res) { 
        try {
            db.collection("Lesson")
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