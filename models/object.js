const { connectToDb, getDb } = require("../db.js");
let db;
connectToDb((error) => {
  if (!error) {
    db = getDb();
  }
});

module.exports = class object { 
    createObject(req, res) { 
        const { objectName } = req.body;
        const object = { objectName };
        try { 
            db.collection("Object").insertOne(object)
        } catch (err) { 
            res.status(500).json({err: 'some error'})
        }
        res.send('its oke')
    }

    getObjects(req, res) { 
        try {
            db.collection("Object")
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